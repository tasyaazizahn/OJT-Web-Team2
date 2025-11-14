import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";

export default function Pendaftaran() {
  const [daftar, setDaftar] = useState([]);
  const [institusi, setInstitusi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");

  const [nama, setNama] = useState("");
  const [telPeserta, setTelPeserta] = useState("");
  const [emailPeserta, setEmailPeserta] = useState("");
  const [pelatihan, setPelatihan] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("", {
        institusi: institusi,
        alamat: alamat,
        telepon: telepon,
        fax: fax,
        email: email,
        nama: nama,
        telPeserta: telPeserta,
        emailPeserta: emailPeserta,
        pelatihan: pelatihan,
      })
      .then((response) => {
        setInstitusi("");
        setAlamat("");
        setTelepon("");
        setFax("");
        setEmail("");
        setNama("");
        setTelPeserta("");
        setEmailPeserta("");
        setPelatihan("");
        console.log(response);
      })
      .catch((error) => {
        console.error("Gagal Menyimpan Data:", error);
      })
      .finally(() => {});
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center">Data Institusi / Lembaga </h3>

          <div className="mb-3 row">
            <label htmlFor="institusi" className="col-sm-2 col-form-label">
              Nama Institusi / Lembaga
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Nama Institusi / Lembaga"
                className="form-control"
                id="institusi"
                value={institusi}
                onChange={(e) => setInstitusi(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Alamat Institusi"
                id="alamat"
                style={{ height: "100px" }}
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="telepon" className="col-sm-2 col-form-label">
              No Telepon
            </label>
            <div className="col-sm-3">
              <input
                type="number"
                placeholder="No. Telepon Institusi"
                className="form-control"
                id="telepon"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="fax" className="col-sm-2 col-form-label">
              No. Fax
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fax"
                placeholder="No. Fax"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="email@contoh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="text-center">Data Peserta </h3>

          <div className="mb-3 row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama Lengkap
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                placeholder="Nama Peserta"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="telPeserta" className="col-sm-2 col-form-label">
              No Telepon Peserta
            </label>
            <div className="col-sm-3">
              <input
                type="number"
                className="form-control"
                placeholder="No. Telepon Peserta"
                id="telPeserta"
                value={telPeserta}
                onChange={(e) => setTelPeserta(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="emailPeserta" className="col-sm-2 col-form-label">
              Email Peserta
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="emailPeserta"
                placeholder="email@contoh.com"
                value={emailPeserta}
                onChange={(e) => setEmailPeserta(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="pelatihan" className="col-sm-2 col-form-label">
              Pilih Pelatihan
            </label>
            <div className="col-sm-10">
              <select
                id="pelatihan"
                className="form-select"
                value={pelatihan}
                onChange={(e) => setPelatihan(e.target.value)}
              >
                <option value="">-- Pilih Sertifikasi --</option>
                <option value="Internal Auditor SMK3">Internal Auditor SMK3</option>
                <option value="Operator Penggerak Mula Jenis Genset">Operator Penggerak Mula Jenis Genset</option>
                <option value="Petugas P3K Ditempat Kerja">Petugas P3K Ditempat Kerja</option>
                <option value="Teknisi K3 Listrik">Teknisi K3 Listrik</option>
                <option value="TKBT Tingkat II">TKBT Tingkat II</option>
                <option value="Supervisi K3 Perancah">Supervisi K3 Perancah</option>
                <option value="Teknisi K3 Deteksi Gas">Teknisi K3 Deteksi Gas</option>
                <option value="Teknisi K3 Listrik">Teknisi K3 Listrik</option>
                <option value="Teknisi K3 PAA">Teknisi K3 PAA</option>
                <option value="Teknisi K3 Perancah">Teknisi K3 Perancah</option>
                <option value="Teknisi K3 PTP">Teknisi K3 PTP</option>
                <option value="Teknisi K3 Tangki Timbun dan Bejana Tekan">Teknisi K3 Tangki Timbun dan Bejana Tekan</option>
                <option value="Teknisi PTP.doc">Teknisi PTP.doc</option>
                <option value="TKBT Level 2">TKBT Level 2</option>
                <option value="TKBT Tingkat 1 dan 2">TKBT Tingkat 1 dan 2</option>
                <option value=""></option>
              </select>
            </div>
          </div>
          <Button/>
        </div>
      </form>
    </section>
  );
}
