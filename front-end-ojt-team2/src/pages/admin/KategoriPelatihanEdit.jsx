import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DataPendaftarEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namaKategori, setNamaKategori] = useState("");

  useEffect(() => {
    fetchDataById();
  }, []);

  const fetchDataById = () => {
    axios
      .get(`http://localhost:5000/kategori-pelatihan/${id}`)
      .then((response) => {
        const DataBaru = response.data;
        setNamaKategori(DataBaru["nama_kategori"]);
      })
      .catch((error) => {
        console.error({ msg: error.message });
      })
      .finally(() => {});
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/kategori-pelatihan/${id}`, {
        nama_kategori: namaKategori,
      })
      .then((response) => {
        console.log(response);
        var message = response.data.message;
        if (message) {
          alert("Data berhasil diperbaharui");
        }
        navigate("/admin/kategori-pelatihan");
      })

      .catch((error) => {
        console.error("❌ Gagal update:", error.response?.data || error.message);
        alert("Gagal memperbarui data!");
      })
      .finally(() => {});
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleUpdate}>
        <div className="container">
          <h3 className="text-center">Data Kategori Pelatihan</h3>

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
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Simpan kategori Pelatihan
          </button>
        </div>
      </form>
    </section>
  );
}
