import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
function ProtectedRoute({ 
    isAuthenticated,
    children,
    adminRoute,
    isAdmin,
    redirect = "/login",
    redirectAdmin = "/profile",
    }) {
    if (!isAuthenticated) {
        return <Navigate to={redirect} />;
    };

    if (adminRoute && !isAdmin) {
        return <Navigate to={redirectAdmin} />;
    }

    return children ? children : <Outlet />;
}

/*
Without Outlet
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return children;
}
*/

export default ProtectedRoute;