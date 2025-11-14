import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import DaftarPelatihanRoute from "./routes/DaftarPelatihanRoute.js";
import DataPendaftarRoute from "./routes/DataPendaftarRoute.js";
import JadwalPelatihanRoute from "./routes/JadwalPelatihanRoute.js";
import KategoriPelatihanRoute from "./routes/KategoriPelatihanRoute.js";

import AuthRoute from "./routes/AuthRoute.js";
import AdminRoute from "./routes/AdminRoute.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

// Register semua route
app.use("/api/auth", AuthRoute);
app.use("/api/admin", AdminRoute);
app.use("/daftar-pelatihan", DaftarPelatihanRoute);
app.use("/data-pendaftar", DataPendaftarRoute);
app.use("/jadwal-training", JadwalPelatihanRoute);
app.use("/kategori-pelatihan", KategoriPelatihanRoute);

// Route test untuk memastikan server hidup
app.get("/", (req, res) => {
  res.send("Server backend aktif!");
});

app.listen(5000, () => console.log("Server berjalan di port 5000"));