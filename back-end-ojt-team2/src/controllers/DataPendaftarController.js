import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDataPendaftar = async (req, res) => {
  try {
    const response = await prisma.peserta.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDataPendaftarById = async (req, res) => {
  try {
    const response = await prisma.peserta.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        nama_pelatihan: true, // tambahkan ini agar relasi ikut diambil
      },
    });
    res.status(200).json({
      ...peserta,
      nama_pelatihan: peserta.nama_pelatihan
        ? peserta.nama_pelatihan.nama_pelatihan // ambil string dari relasi
        : null,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDataPendaftar = async (req, res) => {
  const {
    institusi,
    alamat,
    telepon,
    fax,
    email,
    namaPeserta,
    telPeserta,
    emailPeserta,
    pelatihan,
  } = req.body;
  try {
    const DataPendaftar = await prisma.peserta.create({
      data: {
        institusi: institusi,
        alamat: alamat,
        no_telp: telepon,
        fax: fax,
        email: email,
        nama_peserta: namaPeserta,
        telp_peserta: telPeserta,
        email_peserta: emailPeserta,
        pelatihan: pelatihan,
      },
    });
    res.status(201).json({
      msg: "Data Pendaftar berhasil ditambahkan!",
      data: DataPendaftar,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateDataPendaftar = async (req, res) => {
  const { id } = req.params;
  const {
    institusi,
    alamat,
    telepon,
    fax,
    email,
    namaPeserta,
    telPeserta,
    emailPeserta,
    pelatihan,
  } = req.body;

  try {
    const DataPendaftar = await prisma.peserta.update({
      where: {
        id: parseInt(id),
      },
      data: {
        institusi: institusi,
        alamat: alamat,
        no_telp: telepon,
        fax: fax,
        email: email,
        nama_peserta: namaPeserta,
        telp_peserta: telPeserta,
        email_peserta: emailPeserta,
        pelatihan: pelatihan,
      },
    });
    res.status(200).json({
      msg: "Data Pendaftar berhasil diperbaharui!",
      data: DataPendaftar,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDataPendaftar = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.peserta.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ msg: "Data Pendaftar berhasil dihapus!" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "Data tidak ditemukan!" });
  }
};
