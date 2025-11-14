import express from 'express';

import authController from '../controllers/AuthController.js';

import auth from '../middlewares/Auth.js';
import superAdminOnly from '../middlewares/SuperAdminOnly.js';

const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/dashboard', auth, (req, res) => {
    res.json({ message: 'Selamat Datang', user: req.user });
})

export default router;