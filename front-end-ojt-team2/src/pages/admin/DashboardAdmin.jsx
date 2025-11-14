import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function DashboardAdmin() {
  // Contoh data dummy — nanti bisa kamu ganti dengan data tabel yang sebenarnya
  const dataPendaftar = [
    { id: 1, nama: "Budi" },
    { id: 2, nama: "Ani" },
    { id: 3, nama: "Rian" },
  ];

  const dataPelatihan = [
    { id: 1, nama: "Pelatihan React" },
    { id: 2, nama: "Pelatihan Node.js" },
  ];

  const dataSertifikat = [
    { id: 1, nomor: "CERT-001" },
    { id: 2, nomor: "CERT-002" },
    { id: 3, nomor: "CERT-003" },
    { id: 4, nomor: "CERT-004" },
  ];

  // Data untuk menampilkan kotak (card)
  const cards = [
    {
      title: "Jumlah Pendaftar",
      count: dataPendaftar.length,
      color: "#007bff",
      icon: "👥",
    },
    {
      title: "Jumlah Pelatihan",
      count: dataPelatihan.length,
      color: "#28a745",
      icon: "📘",
    },
    {
      title: "Jumlah Sertifikat",
      count: dataSertifikat.length,
      color: "#ffc107",
      icon: "📜",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="fw-bold mb-4">Dashboard</h2>

      <Row className="g-4">
        {cards.map((card, index) => (
          <Col key={index} md={4}>
            <Card
              className="shadow-sm text-center p-4"
              style={{
                backgroundColor: card.color,
                color: "white",
                border: "none",
                borderRadius: "16px",
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ fontSize: "40px" }}>{card.icon}</div>
              <h5 className="mt-3">{card.title}</h5>
              <h2 className="fw-bold">{card.count}</h2>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}