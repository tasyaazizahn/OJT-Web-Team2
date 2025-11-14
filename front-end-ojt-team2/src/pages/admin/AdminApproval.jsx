import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/admin";

export default function AdminApproval() {
  const [allAdmins, setAllAdmins] = useState([]);
  const [pendingAdmins, setPendingAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [error, setError] = useState(null);

  const isSuperAdmin = user?.role === "superadmin";

  useEffect(() => {
    if (!isSuperAdmin) {
      setError("Akses ditolak. Anda bukan superadmin.");
      setLoading(false);
      return;
    }
    fetchAllAdmins();
  }, [isSuperAdmin]);

  const fetchAllAdmins = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/all`);
      setAllAdmins(response.data); // Set semua data admin
      setError(null);
    } catch (err) {
      console.error("Gagal mengambil daftar admin:", err);
      setError(err.response?.data?.message || "gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (adminId, status) => {
    if (
      !window.confirm(
        `Yakin ingin ${
          status === "approve" ? "menyetujui" : "menolak"
        } admin ini?`
      )
    ) {
      return;
    }

    try {
      const endpoint = `${API_URL}/${adminId}/${status}`;
      await axios.put(endpoint);
      setAllAdmins((prev) =>
        prev.map((admin) =>
          admin.id === adminId
            ? { ...admin, akses: status === "approve" }
            : admin
        )
      );
      alert(
        `Akses admin berhasil di${status === "approve" ? "setujui" : "tolak"}!`
      );
    } catch (err) {
      console.error(`Gagal ${status}:`, err);
      alert(
        `Gagal memproses permintaan: ${
          err.response?.data?.message || "Terjadi kesalahan."
        }`
      );
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Memuat data...</div>;
  }

  if (!isSuperAdmin) {
    return (
      <div className="alert alert-danger mt-5">
        Akses ditolak. Anda bukan Superadmin.
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Manajemen Akses Admin</h3>
      <button className='btn btn-secondary mt-3' onClick={fetchAllAdmins}>Refresh Data</button>
      {allAdmins.length === 0 ? (
        <div className="alert alert-info">Tidak ada Admin terdaftar saat ini.</div>
      ) : (
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status Akses</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {allAdmins.map(admin => ( 
              <tr key={admin.id}>
                <td>{admin.id}</td>
                <td>{admin.username}</td>
                <td>
                  <span className={`badge ${admin.role === 'superadmin' ? 'bg-primary' : 'bg-secondary'}`}>
                    {admin.role.toUpperCase()}
                  </span>
                </td>
                <td>
                  <span className={`badge ${admin.akses ? 'bg-success' : 'bg-danger'}`}>
                    {admin.akses ? 'AKTIF' : 'PENDING'}
                  </span>
                </td>
                <td>
                  <button 
                    onClick={() => handleApproval(admin.id, 'approve')}
                    className="btn btn-success btn-sm me-2"
                  // Non-aktif jika sudah Aktif atau Superadmin
                    disabled={!isSuperAdmin || admin.akses || admin.role === 'superadmin'} 
                  >
                    Setujui
                  </button>
                  <button 
                    onClick={() => handleApproval(admin.id, 'reject')}
                    className="btn btn-danger btn-sm"
                    // Non-aktif jika sudah Pending atau Superadmin
                    disabled={!isSuperAdmin || !admin.akses || admin.role === 'superadmin'}
                  >
                    Cabut Akses
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
    </div>
  );
}
