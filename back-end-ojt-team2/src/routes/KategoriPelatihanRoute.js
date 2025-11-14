import express from "express";
import {
    getKategoriPelatihan,
    getKategoriPelatihanById,
    createKategoriPelatihan,
    updateKategoriPelatihan,
    deleteKategoriPelatihan,
    getKategoriWithPelatihan,
} from "../controllers/KategoriPelatihanController.js";

const router = express.Router();

router.get('/', getKategoriPelatihan);
router.get('/:id', getKategoriPelatihanById);
router.post('/', createKategoriPelatihan);
router.put('/:id', updateKategoriPelatihan);
router.delete('/:id', deleteKategoriPelatihan);
router.get("/", getKategoriWithPelatihan);

export default router;
