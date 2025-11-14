import express from "express";
const router = express.Router();
const { getPelatihan, createPelatihan } = require("../controllers/PelatihanController.js");

// GET semua pelatihan
router.get("/", getPelatihan);

// POST tambah pelatihan
router.post("/", createPelatihan);

export default router;