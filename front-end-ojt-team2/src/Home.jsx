import React from "react"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Halaman Publik
import Beranda from "./pages/Beranda";
import PelatihanK3 from "./pages/PelatihanK3";
import JadwalTraining from "./pages/JadwalTraining";
import Pendaftaran from "./pages/Pendaftaran";
import PublicLayout from "./components/layouts/PublicLayout"; // <-- Layout baru untuk halaman publik

// Import Halaman Admin
import AuthPage from "./pages/admin/AuthPage";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DataPendaftar from "./pages/admin/DataPendaftar";
import DataPendaftarEdit from "./pages/admin/DataPendaftarEdit";
import DaftarPelatihan from "./pages/admin/DaftarPelatihan";
import DaftarPelatihanCreate from "./pages/admin/DaftarPelatihanCreate";
import DaftarPelatihanEdit from "./pages/admin/DaftarPelatihanEdit";
import KategoriPelatihan from "./pages/admin/KategoriPelatihan";
import KategoriPelatihanCreate from "./pages/admin/KategoriPelatihanCreate";
import KategoriPelatihanEdit from "./pages/admin/KategoriPelatihanEdit";
import AdminApproval from "./pages/admin/AdminApproval";
import AdminLayout from "./components/layouts/AdminLayout"; // Layout untuk halaman admin

// Import Logic & Styling
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import SuperAdminRoute from "./routes/SuperAdminRoute";
import "./Home.css";
// import "./components/Navbar.css";
import "./components/Table.css";
import "./components/Footer.css";


export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      
      {/* =================================================== */}
      {/* 1. Rute Publik (Menggunakan PublicLayout) */}
      {/* =================================================== */}
      <Route path="/" element={<PublicLayout />}>
        {/* Konten publik akan dirender di dalam PublicLayout (Navbar, Footer) */}
        <Route path="/beranda" index element={<Beranda />} /> {/* Rute default: / */}
        <Route path="/pelatihan-k3" element={<PelatihanK3 />} />
        <Route path="/jadwal-training" element={<JadwalTraining />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
      </Route>

      {/* Halaman Login Admin - Tetap di luar layout Admin */}
      <Route path="/admin" element={<AuthPage />} />

      {/* =================================================== */}
      {/* 2. Rute Admin Bersarang (Menggunakan AdminLayout & ProtectedRoute) */}
      {/* =================================================== */}
      
      {/* Rute Induk Admin - Dilindungi oleh ProtectedRoute */}
      <Route 
          path="/admin" 
          element={
              <ProtectedRoute>
                  <AdminLayout /> {/* Ini merender Sidebar + <Outlet /> */}
              </ProtectedRoute>
          }
      >
          {/* Rute Anak (Dirender di <Outlet /> AdminLayout) */}
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="data-pendaftar" element={<DataPendaftar />} />
          <Route path="data-pendaftar-edit/:id" element={<DataPendaftarEdit />} />
          <Route path="daftar-pelatihan" element={<DaftarPelatihan />} />
          <Route path="daftar-pelatihan-create" element={<DaftarPelatihanCreate />} />
          <Route path="daftar-pelatihan-edit" element={<DaftarPelatihanEdit />} />
          <Route path="kategori-pelatihan" element={<KategoriPelatihan />} />
          <Route path="kategori-pelatihan-create" element={<KategoriPelatihanCreate />} />
          <Route path="kategori-pelatihan-edit" element={<KategoriPelatihanEdit />} />
          
          {/* Rute khusus superadmin */}
          <Route 
              path="approval" 
              element={
                  <SuperAdminRoute>
                      <AdminApproval />
                  </SuperAdminRoute>
              }
          />
      </Route>
      
    </Routes>
  );
}
