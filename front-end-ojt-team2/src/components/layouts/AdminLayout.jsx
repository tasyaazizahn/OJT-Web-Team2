import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Deteksi ukuran layar biar otomatis buka sidebar kalau layar besar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true); // tampil di desktop
      } else {
        setSidebarOpen(false); // sembunyi di HP
      }
    };
    handleResize(); // jalankan saat awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // hilangkan scrollbar browser
      }}
    >
      {/* Tombol toggle hanya muncul di HP */}
      <button
        onClick={toggleSidebar}
        className="d-md-none"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1001,
          background: "#212529",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        style={{
          width: sidebarOpen ? "220px" : "0",
          transition: "width 0.3s ease",
          background: "#212529",
          color: "white",
          overflow: "hidden",
          height: "100vh",
          zIndex: 1002,
        }}
      >
        <Sidebar />
      </div>

      {/* Overlay gelap saat sidebar terbuka di HP */}
      {sidebarOpen && window.innerWidth < 768 && (
        <div
          onClick={toggleSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        />
      )}

      {/* Konten kanan */}
      <div
        style={{
          flex: 1,
          background: "#f8f9fa",
          overflow: "auto", // scroll hanya di bagian konten
          height: "100vh",
          padding: "20px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}