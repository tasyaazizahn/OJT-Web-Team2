import express from "express";
import { 
    getDataPendaftar,
    getDataPendaftarById,
    createDataPendaftar,
    updateDataPendaftar,
    deleteDataPendaftar
    } from "../controllers/DataPendaftarController.js";

const router = express.Router();

router.get('/', getDataPendaftar);
router.get('/:id', getDataPendaftarById);
router.post('/', createDataPendaftar);
router.put('/:id', updateDataPendaftar);
router.delete('/:id', deleteDataPendaftar);

export default router;