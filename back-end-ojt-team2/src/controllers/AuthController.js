import prisma from '../prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) throw new Error('JWT_SECRET belum di set');

const SALT_ROUNDS = 10;

const authController = {
    register: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            // Validasi input
            if (!username || !password) {
                return res.status(400).json({ message: 'Username & Password wahib diisi'});
            }
            if (password.length <6 ) {
                return res.status(400).json({ message: 'Password minimal 6 karakter'})
            }

            // cek duplikat
            const existingAdmin = await prisma.admin.findUnique({
                where: { username },
            });
                if (existingAdmin) {
                    return res.status(409).json({ message: 'Username ini sudah terdaftar'})
                }

            // hash password
            const hashed = await bcrypt.hash(password, SALT_ROUNDS);

            //menyimpan data admin baru
            const newAdmin = await prisma.admin.create({
                data: {
                    username,
                    password: hashed
                },
                select: { id: true, username: true, role: true, akses: true }
            });

            return res.status(201).json({
                message: 'Registrasi berhasil',
                admin: newAdmin
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            // 1. ambil data admin
            const admin = await prisma.admin.findUnique({
                where: { username }
            });

            if (!admin) {
                return res.status(401).json({message : 'Username tidak valid'})
            }

            // 2. compare password
            const match = await bcrypt.compare(password, admin.password);
            if (!match) {
                return res.status(401).json({ message: 'Password tidak valid'})
            }

            // 3. Cek status akses
            if (admin.akses === false) {
                return res.status(403).json({
                    message: 'Akun belum disetujui oleh Superadmin. Silahkan hubungin Tim terkait.'
                })
            }

            // 4. jika aksess true, buat token, buat jwt payload
            const payload = {
                id: admin.id,
                username: admin.username,
                role: admin.role,
                akses: admin.akses
            };

            const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' })

            // 5. kirim respon
            return res.json({
                message: 'Login berhasil',
                token,
                admin: {
                    id: admin.id,
                    username: admin.username,
                    role: admin.role,
                    akses: admin.akses
                }
            });
        } catch (error) {
            next(error)
        };
    }
}

export default authController;