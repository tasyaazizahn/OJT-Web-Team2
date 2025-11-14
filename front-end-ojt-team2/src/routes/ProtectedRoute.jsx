import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading, user } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    // 1. cek autentikasi
    if (!isAuthenticated) {
        return <Navigate to="/admin" replace />
    }

    //2. cek akses status
    if (user && user.akses === false) {
        return <Navigate to="/admin" replace />
    }

    return children;
};


export default ProtectedRoute;


