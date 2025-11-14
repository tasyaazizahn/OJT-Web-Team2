import axios from "axios";

const API_URL = 'http://localhost:5000/api/auth';

const getToken = () => {
    return localStorage.getItem('admin_token');
}

// fungsi utama auth

// login

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {username, password});

        if (response.data.token) {
            // simpan token dan data user (admin) ke Local Storage
            localStorage.setItem('admin_token', response.data.token);
            localStorage.setItem('admin_user', JSON.stringify(response.data.admin));
        }
        return response.data.admin;

    } catch (error) {
        if (error.response) {
            // Jika ada respons, lempar pesan error dari backend
            throw new Error(error.response.data.message);
        } else if (error.request) {
            // Jika request terkirim tapi tidak ada respons (Network Error, Backend Down)
            throw new Error('Tidak dapat terhubung ke server. Periksa koneksi atau status backend.');
        } else {
            // Error lain
            throw new Error('Terjadi kesalahan saat memproses permintaan.');
        }
    }
}

// register

export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, password});
        return response.data.admin;
    } catch (error) {
        throw error.response.data.message || 'Register gagal';
    } 
};


// logout
export const logout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user')
};


// fungsi untuk proteksi mengirim token

export const getAdminProfile = async () => {
    const token = getToken();

    if (!token) {
        throw new Error('Tidak ada token, user belum login')
    }

    try {
        const response = await axios.get(`${API_URL}/dashboard`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.user;

    } catch (error) {
        if (error.response.status === 401 || error.response.status === 403 ) {
            logout();
        }
        throw error.response.data.message || 'Gagal mengambil data'
    }
}