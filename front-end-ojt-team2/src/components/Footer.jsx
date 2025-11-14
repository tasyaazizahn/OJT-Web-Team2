function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #006d3b, #009e60)", // hijau tua toska gelap
      }}
      data-aos="fade-up"
    >
      {/* Dekorasi lingkaran */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>

      <div className="container-fluid position-relative">
        <div className="row gy-1 align-items-start">
          {/* Kolom 1 - Logo & Info */}
          <div className="col-md-4" style={{ marginTop: "-20px" }}>
            <div className="d-flex align-items-center mb-2">
              <img
                src="/image/logo-geo.png"
                alt="Logo"
                style={{
                  height: "100px",
                  marginRight: "10px",
                  paddingTop: "10px",
                }}
              />
              <h5 className="m-0 fw-bold text-light">PT Geo Mandiri Kreasi</h5>
            </div>
            <p className="text-muted-light small mb-2">
              PT Geo Mandiri Kreasi adalah perusahaan yang bergerak di bidang
              konsultan, pelatihan K3, dan event management. Kami berkomitmen
              untuk memberikan pelayanan terbaik dengan profesionalisme tinggi.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2 - Pusat Pelatihan & Kontak */}
          <div className="col-md-4">
            <h6 className="fw-bold text-light mb-3">Pusat Pelatihan</h6>
            <ul className="list-unstyled small text-muted-light">
              <li className="mb-2">
                <span className="text-muted-light">
                  Rukan Kaca Hijau, Jl. Raya Jatirwaringin No. 6C
                </span>
              </li>
              <li className="mb-2">
                <strong className="text-light">Telepon:</strong>{" "}
                <a
                  href="tel:0218621510"
                  className="text-muted-light text-decoration-none"
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#aaa")}
                >
                  021 862 1510
                </a>
              </li>
              <li className="mb-2">
                <strong className="text-light">Email:</strong>{" "}
                <a
                  href="mailto:info@geomandiri.co.id"
                  className="text-muted-light text-decoration-none"
                  onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.target.style.color = "#aaa")}
                >
                  info@geomandiri.co.id
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Stay Connected */}
          <div className="col-md-3">
            <h6 className="fw-bold text-light mb-3">Stay Connected</h6>
            <p className="text-muted-light small mb-2">
              Daftarkan email Anda untuk mendapatkan informasi dan tips terbaru
              seputar layanan kami serta pelatihan K3.
            </p>
            <button
              className="btn btn-warning fw-semibold mt-2"
              style={{
                color: "#fff",
                borderRadius: "30px",
                padding: "8px 22px",
              }}
            >
              Daftar Newsletter
            </button>
          </div>
        </div>

        {/* Garis bawah */}
        <hr className="border mt-5" />

        {/* Copyright */}
        <div className="text-center text-muted-light small text-light">
          © 2025 PT Geo Mandiri Kreasi. All rights reserved. | Powered by{" "}
          <span style={{ color: "#00bfa5" }}>GeoMandiri</span>
        </div>
      </div>
    </footer>
    // <footer>
    //   <div className="footer">
    //     <div className="row">
    //       <div className="row-main">
    //         <img src={logo} alt="Logo Perusahaan" />
    //         <div className="col-alamat">
    //           <h4>PT. Geo Mandiri Kreasi</h4>
    //           <p>
    //             <b>Pusat Pelatihan </b>: Rukan Kaca Hijau Jl. Raya Jatiwaringin
    //             No. 6C
    //           </p>
    //           <p>
    //             <b>Telepon </b>: 021 862 1510
    //           </p>
    //           <p>
    //             <b>Support </b>: info@geomandiri.co.id
    //           </p>
    //         </div>
    //         <div className="sosmed">
    //           <ul>
    //             <li>
    //               <img src={Instagram} alt="Instagram Geo Mandiri Kreasi" />
    //               <a href="instagram.com/geomakreasi">Instagram</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="row-body">
    //         <div className="col-body">
    //           <div className="about">
    //             <h4>Tentang Kami</h4>
    //             <p>
    //               Kami PT. GEO MANDIRI KREASI Management Consultant, Training
    //               Centre & Event Management yang terdiri dari gabungan
    //               intelektual yang professional pada disiplin masing-masing,
    //               akan sanggup memberikan jasa pelayanan konsultansi secara
    //               professional, objektif dalam lingkup pelayanan jasa
    //               konsultansi.
    //             </p>
    //           </div>
    //           <div className="fitur">
    //             <h4>Fitur</h4>
    //             <ul>
    //                 <li>
    //                     <a href="">Pendaftaran</a>
    //                 </li>
    //                 <li>
    //                     <a href="">Galeri GMK</a>
    //                 </li>
    //                 <li>
    //                     <a href="">Sertifikasi</a>
    //                 </li>
    //                 <li>
    //                     <a href="">Non Sertifikasi</a>
    //                 </li>
    //             </ul>
    //           </div>
    //           <div className="services">
    //             <h4>Service</h4>
    //             <ul>
    //                 <li>
    //                     <a href="">Divisi Konsultan</a>
    //                 </li>
    //                 <li>
    //                     <a href="">Event Organizer</a>
    //                 </li>
    //                 <li>
    //                     <a href="">Training SDM</a>
    //                 </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       <hr />
    //       <div className="row-footer">
    //         <p>&copy;2025 PT. GEO MANDIRI KREASI</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
