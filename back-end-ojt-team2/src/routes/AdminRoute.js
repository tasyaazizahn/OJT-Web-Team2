import express from 'express';
import auth from '../middlewares/Auth.js';
import superAdminOnly from '../middlewares/SuperAdminOnly.js';
// import { loginAdmin } from "../controllers/AdminController.js";
import {
  getAllAdmins,
  getAllPendingAdmins,
  updateAdminStatus,
   // ✅ tambahkan ini
} from '../controllers/AdminController.js';


const router = express.Router();

router.get('/all', auth, superAdminOnly, getAllAdmins);
router.get('/pending', auth, superAdminOnly, getAllPendingAdmins);
router.put('/:id/:status', auth, superAdminOnly, updateAdminStatus);


// // ✅ Tambahkan ini
// router.post('/register', registerAdmin);
// // endpoint POST /api/admin/login
// router.post("/login", loginAdmin);

router.get("/", (req, res) => {
  res.send("API admin aktif!");
});


export default router;