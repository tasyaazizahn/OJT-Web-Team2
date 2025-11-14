import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000/data-pendaftar"; 

export default function DataPendaftar() {
    const [dataPendaftar, setDataPendaftar] = useState([]);
    const navigate = useNavigate();

    const fetchDataPendaftar = async () => {
        try {
            const response = await axios.get(API_URL);
            setDataPendaftar(response.data);
        } catch (error) {
            console.error("Gagal mengambil data pendaftar:", error);
        }
    };
    
    useEffect(() => {
        fetchDataPendaftar();
    }, []); 

    const handleUpdate = (id) => {
        navigate(`/admin/data-pendaftar-edit/${id}`)
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Apakah yakin akan menghapus data ini?"
        );
        if (!confirmDelete) return;

        axios
            .delete(`http://localhost:5000/data-pendaftar/${id}`)
            .then(response =>{
                fetchDataPendaftar();
                alert('Data Berhasil dihapus')
            })
            .catch(error => {
                
            })
            .finally(() => {
                
            })
    }

    return (
        <div className="container mt-5">
  <h3>Data Pendaftar Peserta Pelatihan</h3>

  <div className="table-responsive">
    <table className="table table-striped table-bordered align-middle text-center">
      <thead className="table-success">
        <tr>
          <th style={{ width: "50px" }}>No.</th>
          <th style={{ minWidth: "150px" }}>Institusi</th>
          <th style={{ minWidth: "200px" }}>Alamat</th>
          <th style={{ minWidth: "120px" }}>Telepon</th>
          <th style={{ minWidth: "120px" }}>Fax</th>
          <th style={{ minWidth: "180px" }}>Email</th>
          <th style={{ minWidth: "150px" }}>Nama Peserta</th>
          <th style={{ minWidth: "150px" }}>Telepon Peserta</th>
          <th style={{ minWidth: "180px" }}>Email Peserta</th>
          <th style={{ minWidth: "220px", wordBreak: "break-word" }}>Pelatihan</th>
          <th style={{ width: "100px" }}>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {dataPendaftar.map((data, index) => (
          <tr key={data.id}>
            <td>{index + 1}</td>
            <td className="text-break">{data.institusi}</td>
            <td className="text-break">{data.alamat}</td>
            <td>{data.no_telp}</td>
            <td>{data.fax}</td>
            <td className="text-break">{data.email}</td>
            <td className="text-break">{data.nama_peserta}</td>
            <td>{data.telp_peserta}</td>
            <td className="text-break">{data.email_peserta}</td>
            <td className="text-break">{data.nama_pelatihan}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleUpdate(data.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(data.id)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
}