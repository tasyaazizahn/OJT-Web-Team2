import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function KategoriPelatihanCreate() {
  const navigate = useNavigate();
  const [namaKategori, setNamaKategori] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Mengirim data:", namaKategori);

      const response = await axios.post(
        "http://localhost:5000/kategori-pelatihan",
        {
          nama_kategori: namaKategori,
        }
      );

      console.log("Response dari server:", response.data);
      alert("✅ Data berhasil disimpan!");
      setNamaKategori("");
      navigate("/admin/kategori-pelatihan");
    } catch (error) {
      console.error("❌ Gagal menyimpan data:", error.response || error);
      alert("Gagal menyimpan data. Cek console untuk detail.");
    }
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center mb-4">Tambah Kategori Pelatihan</h3>

          <div className="mb-3 row">
            <label htmlFor="nama_kategori" className="col-sm-2 col-form-label">
              Nama Kategori
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Nama Kategori"
                className="form-control"
                id="nama_kategori"
                value={namaKategori}
                onChange={(e) => setNamaKategori(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              Simpan Kategori Pelatihan
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
