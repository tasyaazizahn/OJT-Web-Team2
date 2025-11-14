import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DaftarPelatihanEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namaPelatihan, setNamaPelatihan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [persyaratan, setPersyaratan] = useState("");
  const [materiPembelajaran, setMateriPembelajaran] = useState("");
  const [instruktur, setInstruktur] = useState("");
  const [sertifikasi, setSertifikasi] = useState("");
  const [metodePembelajaran, setMetodePembelajaran] = useState("");
  const [biaya, setBiaya] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [contact, setContact] = useState("");
  const [namaKategori, setNamaKategori] = useState("");
  const [idKategori, setIdKategori] = useState("");

  useEffect(() => {
    fetchDataById();
  }, []);

  const fetchDataById = () => {
    axios
      .get(`http://localhost:5000/daftar-pelatihan/${id}`)
      .then((response) => {
        const DataBaru = response.data;
        setNamaPelatihan(DataBaru["nama_pelatihan"]);
        setTujuan(DataBaru["tujuan"]);
        setPersyaratan(DataBaru["persyaratan"]);
        setMateriPembelajaran(DataBaru["materi_pembelajaran"]);
        setInstruktur(DataBaru["instruktur"]);
        setSertifikasi(DataBaru["sertifikasi"]);
        setMetodePembelajaran(DataBaru["metode_pembelajaran"]);
        setBiaya(DataBaru["biaya"]);
        setFasilitas(DataBaru["fasilitas"]);
        setContact(DataBaru["contact"]);
        setNamaKategori(DataBaru["nama_kategori"]);
        setIdKategori(DataBaru["id_kategori"]);
      })
      .catch((error) => {
        console.error({ msg: error.message });
      })
      .finally(() => {});
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/daftar-pelatihan/${id}`, {
        nama_pelatihan: namaPelatihan,
        tujuan: tujuan,
        persyaratan: persyaratan,
        materi_pembelajaran: materiPembelajaran,
        instruktur: instruktur,
        sertifikasi: sertifikasi,
        metode_pembelajaran: metodePembelajaran,
        biaya: biaya,
        fasilitas: fasilitas,
        contact: contact,
        nama_kategori: namaKategori,
        id_kategori: idKategori,
      })
      .then((response) => {
        console.log(response);
        var message = response.data.message;
        if (message) {
          alert("Data berhasil diperbaharui");
        }
        navigate("/admin/daftar-pelatihan");
      })
      .catch((error) => {
         console.log("ERROR UPDATE:", error.response ? error.response.data : error.message);
      })
      .finally(() => {});
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleUpdate}>
        <div className="container">
          <h3 className="text-center">Data Institusi / Lembaga </h3>

          <div className="mb-3 row">
            <label htmlFor="nama_pelatihan" className="col-sm-2 col-form-label">
              Nama Pelatihan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Nama Pelatihan"
                className="form-control"
                id="nama_pelatihan"
                value={namaPelatihan}
                onChange={(e) => setNamaPelatihan(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="tujuan" className="col-sm-2 col-form-label">
              Tujuan
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Tujuan"
                id="tujuan"
                style={{ height: "100px" }}
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="persyaratan" className="col-sm-2 col-form-label">
              Persyaratan
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                placeholder="Persyaratan"
                className="form-control"
                id="persyaratan"
                value={persyaratan}
                onChange={(e) => setPersyaratan(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="materi_pembelajaran"
              className="col-sm-2 col-form-label"
            >
              Materi Pembelajaran
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="materi_pembelajaran"
                placeholder="Materi Pembelajaran"
                value={materiPembelajaran}
                onChange={(e) => setMateriPembelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="instruktur" className="col-sm-2 col-form-label">
              Instruktur
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="instruktur"
                placeholder="Instruktur"
                value={instruktur}
                onChange={(e) => setInstruktur(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="sertifikasi" className="col-sm-2 col-form-label">
              Sertifikasi
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="sertifikasi"
                placeholder="Sertifikasi"
                value={sertifikasi}
                onChange={(e) => setSertifikasi(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="metode_pembelajaran"
              className="col-sm-2 col-form-label"
            >
              Metode Pembelajaran
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="metode_pembelajaran"
                placeholder="Metode Pembelajaran"
                value={metodePembelajaran}
                onChange={(e) => setMetodePembelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="biaya" className="col-sm-2 col-form-label">
              Biaya
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="biaya"
                placeholder="Biaya"
                value={biaya}
                onChange={(e) => setBiaya(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="fasilitas" className="col-sm-2 col-form-label">
              Fasilitas
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fasilitas"
                placeholder="Fasilitas"
                value={fasilitas}
                onChange={(e) => setFasilitas(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="contact" className="col-sm-2 col-form-label">
              Contact
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="nama_kategori" className="col-sm-2 col-form-label">
              Nama Kategori
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama_kategori"
                placeholder="Nama Kategori"
                value={namaKategori}
                onChange={(e) => setNamaKategori(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="file" className="col-sm-2 col-form-label">
              Informasi lengkap untuk di download
            </label>
            <div className="col-sm-10">
              <div className="mb-3">
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary" type="submit">
            Simpan
          </button>
        </div>
      </form>
    </section>
  );
}
