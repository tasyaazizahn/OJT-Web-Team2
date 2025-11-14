import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out", // transisi lebih smooth
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎠 Efek untuk mengaktifkan carousel otomatis
  useEffect(() => {
    const carouselElement = document.querySelector("#heroCarousel");
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // auto-slide setiap 5 detik
        ride: "carousel", // langsung jalan otomatis
        pause: false, // biar gak berhenti waktu dihover
        wrap: true, // looping terus
      });
    }
  }, []);

  return (
    <div>
      {/* 🔹 Top Bar */}
      <div className="bg-light py-1 border-bottom small">
        <div className="container d-flex justify-content-between align-items-center">
          {/* 🔸 Kiri: Ikon Sosial Media */}
          <div className="d-flex align-items-center">
            <a href="#" className="text-dark me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-dark me-3">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          {/* 🔸 Kanan: Telepon, Bahasa, Tombol */}
          <div className="d-flex align-items-center">
            {/* Telepon */}
            <a
              href="tel:0218621510"
              className="text-dark me-3 text-decoration-none d-flex align-items-center"
            >
              <i className="bi bi-telephone me-2"></i>
              telp: 021-11-2123-900
            </a>
            {/* Bahasa */}
            <div className="dropdown me-3" style={{ zIndex: 9999 }}>
              <a
                className="dropdown-toggle text-dark text-decoration-none"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ID
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    EN
                  </a>
                </li>
              </ul>
            </div>
            {/* Tombol Registrasi */}
            <a
              href="/data-pendaftar"
              className="btn btn-outline-success btn-sm"
              style={{ borderColor: "#006d3b", color: "#006d3b" }}
            >
              Pendaftaran
            </a>
          </div>
        </div>
      </div>
      {/* 🔹 Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${
          isFixed ? "fixed-top" : ""
        }`}
        style={{
          top: isFixed ? "0" : "auto",
          zIndex: 1030,
          transition: "top 0.3s ease",
          backgroundColor: "white",
          paddingTop: "0.4rem",
          paddingBottom: "0.4rem",
          height: "120px",
        }}
      >
        <div className="container container-scroll">
          <a className="navbar-brand fw-bold text-dark" href="#">
            <img
              src="/image/logo-geo.png"
              alt="Logo"
              style={{
                width: "100px", // ukuran logo tetap
                height: "auto",
                marginRight: "2px",
                maxHeight: "200px", // 🔹 batasi tinggi logo
                objectFit: "contain",
              }}
            />
            <span style={{ color: "#006d3b", fontSize: "1.1rem" }}>Geo Mandiri Kreasi</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end bg-white"
            id="navbarMain"
            style={{
              borderTop: "1px solid #eee", // ✅ kasih pemisah biar rapi
              padding: "0.5rem 1rem",
            }}
          >
            <ul className="navbar-nav align-items-center">
                <a className="nav-link active" href="/beranda">Home</a>
                <a className="nav-link active" href="/pelatihan-k3">Pelatihan K3</a>
                <a className="nav-link active" href="/jadwal-training">Jadwal Training</a>
                <a className="nav-link active" href="/pendaftaran">Pendaftaran</a>
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer hanya muncul saat navbar fixed */}
      {isFixed && <div style={{ height: "80px" }}></div>}
    </div>
  );
}
