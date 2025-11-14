import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getKategoriPelatihan = async (req, res) => {
  try {
    const response = await prisma.kategori_pelatihan.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKategoriPelatihanById = async (req, res) => {
  try {
    const response = await prisma.kategori_pelatihan.findUnique({
      where: {
        id_kategori: parseInt(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createKategoriPelatihan = async (req, res) => {
  const { nama_kategori } = req.body;
  try {
    const KategoriPelatihan = await prisma.kategori_pelatihan.create({
      data: {
        nama_kategori: nama_kategori,
      },
    });
    res.status(201).json({
      msg: "Data Pendaftar berhasil ditambahkan!",
      data: KategoriPelatihan,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateKategoriPelatihan = async (req, res) => {
  const { id } = req.params;
  const { nama_kategori } = req.body;

  try {
    const KategoriPelatihan = await prisma.kategori_pelatihan.update({
      where: {
        id_kategori: parseInt(id),
      },
      data: {
        nama_kategori: nama_kategori,
      },
    });
    res.status(200).json({
      msg: "Data Pendaftar berhasil diperbaharui!",
      data: KategoriPelatihan,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const deleteKategoriPelatihan = async (req, res) => {
  const { id } = req.params;
  console.log("🟢 ID yang dikirim dari frontend:", id);

  try {
    const deleted = await prisma.kategori_pelatihan.delete({
      where: { id_kategori: parseInt(id) }
    });
    console.log("✅ Data berhasil dihapus:", deleted);
    res.status(200).json({ msg: "Data berhasil dihapus!", data: deleted });
  } catch (error) {
    console.error("❌ Gagal hapus kategori:", error);

    if (error.code === "P2025") {
      // Record tidak ditemukan
      res.status(404).json({ msg: "Data tidak ditemukan!" });
    } else {
      // Error lain
      res.status(500).json({ msg: "Terjadi kesalahan pada server!" });
    }
  }
};

export const getKategoriWithPelatihan = async (req, res) => {
  try {
    const kategori = await prisma.kategori_pelatihan.findMany({
      include: {
        // pastikan nama relasi sama dengan di schema prisma:
        // di schema kamu relasinya bernama `data` (lihat model kategori_pelatihan)
        data: {
          select: {
            id_pelatihan: true,
            nama_pelatihan: true,
            tujuan: true,
            persyaratan: true,
            materi_pembelajaran: true,
            instruktur: true,
            sertifikasi: true,
            metode_pembelajaran: true,
            biaya: true,
            fasilitas: true,
            contact: true,
            id_kategori: true,
          },
        },
      },
    });

    return res.status(200).json(kategori);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err.message });
  }
};