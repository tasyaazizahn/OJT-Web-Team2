import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_KATEGORI = "http://localhost:5000/kategori-pelatihan";

export default function DaftarPelatihan() {
  const [kategori, setKategori] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const loadKategori = async () => {
    try {
      const res = await axios.get(API_KATEGORI);
      setKategori(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadKategori = async () => {
      try {
        // ambil kategori
        const kat = await axios.get("http://localhost:5000/kategori-pelatihan");

        // ambil daftar pelatihan
        const pel = await axios.get("http://localhost:5000/daftar-pelatihan");

        // gabungkan manual berdasarkan id_kategori
        const kategoriFinal = kat.data.map((k) => ({
          ...k,
          daftar_pelatihan: pel.data.filter(
            (p) => p.id_kategori === k.id_kategori
          ),
        }));

        setKategori(kategoriFinal);
      } catch (error) {
        console.log(error);
      }
    };

    loadKategori();
  }, []);

  useEffect(() => {
    console.log("Kategori lengkap:", kategori);
  }, [kategori]);

  // render sidebar (sama seperti sebelumnya)
  {
    kategori.map((k) => (
      <button key={k.id_kategori} onClick={() => setSelected(k.id_kategori)}>
        {k.nama_kategori}
      </button>
    ));
  }

  // render isi -> PENTING: gunakan .data (sesuai include di Prisma)
  {
    kategori
      .find((k) => k.id_kategori === selected)
      ?.data?.map((pel, i) => (
        <div key={pel.id_pelatihan}>
          <h5>{pel.nama_pelatihan}</h5>
          <p>{pel.tujuan}</p>
          {/* dsb */}
        </div>
      ));
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Daftar Pelatihan K3</h2>
        <p className="text-muted">
          Pilih kategori pelatihan di bawah untuk melihat daftar program dan
          penjelasannya
        </p>
      </div>

      <div className="mb-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => navigate("/admin/daftar-pelatihan-create")}
        >
          Tambah Data Baru
        </button>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0 rounded-3 overflow-hidden">
            <div className="row g-0">
              {/* SIDEBAR */}
              <div className="col-md-4 bg-light border-end">
                <div className="p-4">
                  <h5 className="fw-bold text-success mb-3">
                    Kategori Pelatihan
                  </h5>
                  {kategori.map((k) => (
                    <button
                      key={k.id_kategori}
                      className={`list-group-item list-group-item-action mb-2 ${
                        selected === k.id_kategori
                          ? "active bg-success text-white"
                          : ""
                      }`}
                      onClick={() => setSelected(k.id_kategori)}
                    >
                      {k.nama_kategori}
                    </button>
                  ))}
                </div>
              </div>

              {/* ISI KONTEN */}
              <div className="col-md-8 p-4">
                {!selected ? (
                  <p className="text-muted">
                    Silakan pilih kategori pelatihan di sebelah kiri.
                  </p>
                ) : (
                  <>
                    <h5 className="fw-bold text-success mb-3">
                      {
                        kategori.find((k) => k.id_kategori === selected)
                          ?.nama_kategori
                      }
                    </h5>

                    <div className="accordion" id="accordionPelatihan">
                      {kategori
                        .find((k) => k.id_kategori === selected)
                        ?.daftar_pelatihan?.map((pel, i) => (
                          <div
                            className="accordion-item mb-2"
                            key={pel.id_pelatihan}
                          >
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button ${
                                  i !== 0 ? "collapsed" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#col${i}`}
                              >
                                {pel.nama_pelatihan}
                              </button>
                            </h2>

                            <div
                              id={`col${i}`}
                              className={`accordion-collapse collapse ${
                                i === 0 ? "show" : ""
                              }`}
                              data-bs-parent="#accordionPelatihan"
                            >
                              <div
                                className="accordion-body"
                                key={pel.id_pelatihan}
                              >
                                <h6>Tujuan</h6>
                                <p>{pel.tujuan}</p>

                                <h6>Persyaratan</h6>
                                <p>{pel.persyaratan}</p>

                                <h6>Materi Pembelajaran</h6>
                                <p>{pel.materi_pembelajaran}</p>

                                <h6>Instruktur</h6>
                                <p>{pel.instruktur}</p>

                                <h6>Sertifikasi</h6>
                                <p>{pel.sertifikasi}</p>

                                <h6>Metode Pembelajaran</h6>
                                <p>{pel.metode_pembelajaran}</p>

                                <h6>Biaya</h6>
                                <p>{pel.biaya}</p>

                                <h6>Fasilitas</h6>
                                <p>{pel.fasilitas}</p>

                                <h6>Contact</h6>
                                <p>{pel.contact}</p>

                                <div className="d-flex justify-content-end gap-2">
                                  <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                      navigate(
                                        `/admin/daftar-pelatihan-edit/${pel.id_pelatihan}`
                                      )
                                    }
                                  >
                                    Edit
                                  </button>

                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={async () => {
                                      if (
                                        window.confirm("Yakin ingin hapus?")
                                      ) {
                                        await axios.delete(
                                          `http://localhost:5000/daftar-pelatihan/${pel.id_pelatihan}`
                                        );
                                        loadKategori();
                                      }
                                    }}
                                  >
                                    Hapus
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
