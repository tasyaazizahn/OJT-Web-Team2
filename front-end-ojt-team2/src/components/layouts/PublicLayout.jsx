import React from 'react';
import { Outlet } from 'react-router-dom';

// Path: Dari /components/layouts/ naik satu tingkat (..) ke /components/
// Lalu ambil Navbar dan Footer
import Navbar from "../Navbar"; 
import Footer from "../Footer";

// Hapus DESTRUCTURING PROPS yang menyebabkan error 500
export default function PublicLayout() { 
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> 
      
      {/* Konten akan menyesuaikan tinggi */}
      <main className="flex-grow-1">
          <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
