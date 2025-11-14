import { PrismaClient } from "../src/generated/index.js";

const prisma = new PrismaClient();

// GET semua pelatihan beserta file-nya
const getPelatihan = async (req, res) => {
  try {
    const data = await prisma.pelatihan.findMany({
      include: { files: true } // ambil relasi File
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST tambah pelatihan
const createPelatihan = async (req, res) => {
  const { kategori, title, desc, files } = req.body;

  try {
    const newPelatihan = await prisma.pelatihan.create({
      data: {
        kategori,
        title,
        desc,
        files: {
          create: files.map(f => ({
            filename: f.filename,
            filepath: f.filepath
          }))
        }
      },
      include: { files: true }
    });

    res.json(newPelatihan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPelatihan, createPelatihan };