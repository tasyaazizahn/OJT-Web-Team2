import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import React from "react";
import { Nav } from 'react-bootstrap'; 

export default function Sidebar() {
  const { user, logout } = useAuth();
  const isSuperAdmin = user?.role === "superadmin";
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    // Sidebar container: tinggi penuh (vh-100), background sukses, padding
    <div className="bg-success text-white p-3 vh-100 sticky-top d-flex flex-column">
      
      <h4 className="fw-bold mb-4 border-bottom pb-2">Admin Panel</h4>
      
      {/* Navigasi Utama */}
      <Nav className="flex-column flex-grow-1" defaultActiveKey="/admin/dashboard">
        
        {/* Dashboard */}
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/dashboard" className="text-white">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Nav.Link>
        </Nav.Item>

        {/* Data Pendaftar */}
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/data-pendaftar" className="text-white">
            <i className="bi bi-person-lines-fill me-2"></i> Data Pendaftar
          </Nav.Link>
        </Nav.Item>
        
        {/* Daftar Pelatihan */}
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/daftar-pelatihan" className="text-white">
            <i className="bi bi-journal-text me-2"></i> Daftar Pelatihan
          </Nav.Link>
        </Nav.Item>

        {/* Kategori Pelatihan */}
        <Nav.Item>
          <Nav.Link as={NavLink} to="/admin/kategori-pelatihan" className="text-white">
            <i className="bi bi-tags-fill me-2"></i> Kategori Pelatihan
          </Nav.Link>
        </Nav.Item>
        
        {/* Admin Approval (Hanya untuk SuperAdmin) */}
        {isSuperAdmin && (
          <Nav.Item>
            <Nav.Link as={NavLink} to="/admin/approval" className="text-white fw-bold">
              <i className="bi bi-person-check-fill me-2"></i> Admin Approval
            </Nav.Link>
          </Nav.Item>
        )}
        
        <hr className="my-3 text-secondary" />

        {/* Logout Button (Dorong ke bawah) */}
        <div className="mt-auto">
            <button onClick={handleLogout} className="btn btn-danger w-100">
              <i className="bi bi-box-arrow-right me-2"></i> Logout ({user?.username || "Admin"})
            </button>
        </div>
        
      </Nav>
    </div>
  );
}