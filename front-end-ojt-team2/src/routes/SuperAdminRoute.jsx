import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from "./ProtectedRoute";

const SuperAdminRoute = ({ children }) => {
    const {user } = useAuth();

    return (
        <ProtectedRoute>
            {user && user.role === 'superadmin' ? (
                children
            ) : (
                <Navigate to="/admin/dashboard" replace />
            )}
        </ProtectedRoute>
    )
}

export default SuperAdminRoute;