import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {

    const isLogin = JSON.parse(localStorage.getItem("isLogin"));

    if (isLogin === false)
        return <Navigate to="/login" replace />

    return (
        <div>
            {children}
        </div>
    )

}

export default ProtectedRoute