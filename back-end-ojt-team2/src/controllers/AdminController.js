import prisma from '../prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

// fungsi superadmin untuk melihat admin
export const getAllAdmins = async (req, res, next) => {
    try {

        // const loginAdminId = req.user.id;
        const allAdmins = await prisma.admin.findMany({
            
            select: {
                id: true,
                username: true,
                role: true,
                akses: true
            },
            orderBy: {
                id: 'asc'
            }
        });
        res.status(200).json(allAdmins);
    } catch (error) {
        next(error)
    }
}

export const getAllPendingAdmins = async (req, res) => {
    try {
        const pendingAdmins = await prisma.admin.findMany({
            where: {
                akses: false
            },
            select: {
                id: true,
                username: true,
                role: true,
                akses: true
            }
        });
        res.status(200).json(pendingAdmins);
    } catch (error) {
        console.error("Error fetching pending admins:", error);
        res.status(500).json({ message: "Gagal mengambil daftar admin pending dari database." });
    }
}

export const updateAdminStatus = async (req, res) => {
    const { id, status } = req.params; 
    const adminId = parseInt(id); // Pastikan parsing di awal

    if (!['approve', 'reject'].includes(status)) {
        return res.status(400).json({ message: "Status yang diminta ('approve' atau 'reject') tidak valid." });
    }

    const newAksesValue = status === 'approve'; 

    try {
        // 🚨 (1) Cek Keamanan: Pastikan bukan Superadmin yang diubah aksesnya
        const targetAdmin = await prisma.admin.findUnique({
             where: { id: adminId }
        });
        if (!targetAdmin || targetAdmin.role === 'superadmin') {
            return res.status(400).json({ message: 'Akses Superadmin tidak dapat diubah melalui endpoint ini.'});
        }
        
        // 🚨 (2) Lakukan Update
        const updatedAdmin = await prisma.admin.update({
            where: {
                id: adminId 
            },
            data: {
                akses: newAksesValue
            }
        });

        res.status(200).json({ 
            message: `Admin ${updatedAdmin.username} berhasil di${status === 'approve' ? 'setujui' : 'tolak'}.`,
            admin: updatedAdmin
        });

    } catch (error) {
        if (error.code === 'P2025') { 
            return res.status(404).json({ message: "Admin tidak ditemukan." });
        }
        console.error("Error updating admin status:", error);
        res.status(500).json({ message: "Gagal memperbarui status admin." });
    }
};

// export const registerAdmin = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Validasi input
//     if (!username || !password) {
//       return res.status(400).json({ msg: "Username dan password wajib diisi" });
//     }

//     // Cek apakah username sudah ada
//     const existingAdmin = await prisma.admin.findUnique({
//       where: { username },
//     });

//     if (existingAdmin) {
//       return res.status(400).json({ msg: "Username sudah digunakan" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Simpan ke database
//     const newAdmin = await prisma.admin.create({
//       data: {
//         username,
//         password: hashedPassword,
//         role: "admin",  // default role
//         akses: false,   // default belum disetujui superadmin
//       },
//     });

//     res.status(201).json({ msg: "Admin berhasil didaftarkan", admin: newAdmin });
//   } catch (error) {
//     console.error("Register error:", error);
//     res.status(500).json({ msg: "Terjadi kesalahan server", error: error.message });
//   }
// };

// export const loginAdmin = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await prisma.admin.findFirst({
//       where: { username },
//     });

//     if (!admin) return res.status(404).json({ msg: "Username tidak ditemukan" });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ msg: "Password salah" });

//     res.status(200).json({ msg: "Login berhasil", admin });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };