import React, { createContext, useState, useEffect, useContext, Children} from "react";
import axios from "axios";
import { login as apiLogin, register as apiRegister, logout as apiLogout } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // fungsi untuk verif token dan status akses
    const checkAuth = () => {
        const token = localStorage.getItem('admin_token');
        const userData = JSON.parse(localStorage.getItem('admin_user'));

        if (token && userData) {
            // cek status akses
            if (userData.akses === false) {
                apiLogout();
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            setUser(userData);
            setIsAuthenticated(true);

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (username, password) => {
        const response = await apiLogin(username, password);

        if (response.akses === false) {
            apiLogout();
            throw new Error('Akun belum disetujui oleh Superadmin.');
        }

        setUser(response);
        setIsAuthenticated(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('admin_token')}`;
        return response;
    };

    const logout = () => {
        apiLogout();
        setUser(null);
        setIsAuthenticated(false);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{
            user, 
            isAuthenticated, 
            loading,
            login, 
            logout, 
            register: apiRegister}}>
            {children}
        </AuthContext.Provider>
    )
}