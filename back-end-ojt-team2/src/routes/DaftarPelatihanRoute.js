import express from "express";
import {
    getDaftarPelatihan,
    getDaftarPelatihanById,
    createDaftarPelatihan,
    updateDaftarPelatihan,
    deleteDaftarPelatihan
} from "../controllers/DaftarPelatihanController.js";

const router = express.Router();

router.get('/', getDaftarPelatihan);
router.get('/:id', getDaftarPelatihanById);
router.post('/', createDaftarPelatihan);
router.put('/:id', updateDaftarPelatihan);
router.delete('/:id', deleteDaftarPelatihan);

export default router;
