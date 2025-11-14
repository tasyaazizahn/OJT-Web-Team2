import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/kategori-pelatihan";

export default function KategoriPelatihan() {
  const [kategoriPelatihan, setKategoriPelatihan] = useState([]);
  const navigate = useNavigate();

  const fetchKategoriPelatihan = async () => {
    try {
      const response = await axios.get(API_URL);
      setKategoriPelatihan(response.data);
    } catch (error) {
      console.error("Gagal mengambil data pendaftar:", error);
    }
  };

  useEffect(() => {
    fetchKategoriPelatihan();
  }, []);

  const handleSubmit = () => {
    navigate("/admin/kategori-pelatihan-create")
  }

  const handleUpdate = (id) => {
    navigate(`/admin/kategori-pelatihan-edit/${id}`);
  };

  const handleDelete = async (id) => {
    console.log("🟠 ID yang akan dihapus:", id); // Tambahkan ini
    const confirmDelete = window.confirm(
      "Apakah yakin akan menghapus data ini?"
    );
    if (!confirmDelete) return;

    axios
      .delete(`http://localhost:5000/kategori-pelatihan/${id}`)
      .then((response) => {
        fetchKategoriPelatihan();
        alert("Data Berhasil dihapus");
      })
      .catch((error) => {
        console.error(
          "❌ Gagal menghapus:",
          error.response?.data || error.message
        );
        alert("Gagal menghapus data!");
      })
      .finally(() => {});
  };

  return (
    <div className="container mt-5">
      <h3>Data Kategori Pelatihan</h3>
      <div class="d-grid gap-2 mb-3 mx-auto">
        <button class="btn btn-primary" type="button"
        onClick={handleSubmit}
        >
          Tambah
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle text-center">
          <thead className="table-success">
            <tr>
              <th style={{ width: "50px" }}>No.</th>
              <th style={{ minWidth: "150px" }}>Nama Kategori</th>
              <th style={{ width: "100px" }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {kategoriPelatihan.map((data, index) => (
              <tr key={data.id_kategori}>
                <td>{index + 1}</td>
                <td className="text-break">{data.nama_kategori}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleUpdate(data.id_kategori)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(data.id_kategori)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
