import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DaftarPelatihanCreate() {
  const navigate = useNavigate();
  const [idKategori, setIdKategori] = useState("");
  const [namaKategori, setNamaKategori] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Mengirim data: ", {
        idKategori,
        namaKategori,
        namaPelatihan,
        tujuan,
        persyaratan,
        materiPembelajaran,
        instruktur,
        sertifikasi,
        metodePembelajaran,
        biaya,
        fasilitas,
        contact,
      });

      const response = await axios.post(
        "http://localhost:5000/daftar-pelatihan",
        {
          id_kategori: Number(idKategori),
          nama_kategori: namaKategori,
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
        }
      );

      console.log("Response dari server:", response.data);
      alert("✅ Data berhasil disimpan!");
      setIdKategori("");
      setNamaKategori("");
      setNamaPelatihan("");
      setTujuan("");
      setPersyaratan("");
      setMateriPembelajaran("");
      setInstruktur("");
      setSertifikasi("");
      setMetodePembelajaran("");
      setBiaya("");
      setFasilitas("");
      setContact("");
      navigate("/admin/daftar-pelatihan");
    } catch (error) {
      console.error("Gagal menyimpan data: ", error.response || error);
      alert("Gagagl meyimpan data. Cek console untuk detail.");
    }
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center mb-4">Tambah Daftar Pelatihan</h3>

          <div className="mb-3 row">
            <label htmlFor="id_kategori" className="col-sm-2 col-form-label">
              Id Kategori
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Id Kategori"
                className="form-control"
                id="id_kategori"
                value={idKategori}
                onChange={(e) => setIdKategori(e.target.value)}
                required
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
                placeholder="Nama Kategori"
                className="form-control"
                id="nama_kategori"
                value={namaKategori}
                onChange={(e) => setNamaKategori(e.target.value)}
                required
              />
            </div>
          </div>

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
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="tujuan" className="col-sm-2 col-form-label">
              Tujuan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Tujuan"
                className="form-control"
                id="tujuan"
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="persyaratan" className="col-sm-2 col-form-label">
              Persyaratan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Persyaratan"
                className="form-control"
                id="persyaratan"
                value={persyaratan}
                onChange={(e) => setPersyaratan(e.target.value)}
                required
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
                placeholder="Materi Pembelajaran"
                className="form-control"
                id="materi_pembelajaran"
                value={materiPembelajaran}
                onChange={(e) => setMateriPembelajaran(e.target.value)}
                required
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
                placeholder="Instruktur"
                className="form-control"
                id="instruktur"
                value={instruktur}
                onChange={(e) => setInstruktur(e.target.value)}
                required
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
                placeholder="Sertifikasi"
                className="form-control"
                id="sertifikasi"
                value={sertifikasi}
                onChange={(e) => setSertifikasi(e.target.value)}
                required
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
                placeholder="Metode Pembelajaran"
                className="form-control"
                id="metode_pembelajaran"
                value={metodePembelajaran}
                onChange={(e) => setMetodePembelajaran(e.target.value)}
                required
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
                placeholder="Biaya"
                className="form-control"
                id="biaya"
                value={biaya}
                onChange={(e) => setBiaya(e.target.value)}
                required
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
                placeholder="Fasilitas"
                className="form-control"
                id="fasilitas"
                value={fasilitas}
                onChange={(e) => setFasilitas(e.target.value)}
                required
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
                placeholder="Contact"
                className="form-control"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
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

          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              Simpan Daftar Pelatihan
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
