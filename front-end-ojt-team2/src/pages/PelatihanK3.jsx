import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000/daftar-pelatihan";

export default function PelatihanK3(){
  const [ pelatihanK3, setPelatihanK3 ] = useState([]);
  const navigate = useNavigate();

  const fetchPelatihanK3 = async() => {
    try{
      const response = await axios.get(API_URL);
      setPelatihanK3(response.data);
    } catch (error) {
      console.error("Gagal mengambil data Daftar Pelatihan:", error);
    }
  };

  useEffect(() => {
    fetchPelatihanK3();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/admin/daftar-pelatihan-edit/${id}`)
  }
}