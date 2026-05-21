import React from 'react'
import { Navigate } from 'react-router'
import Login from '../src/page/Login'

const ProtectRoute = ({ children }) => {

    const token = localStorage.getItem("token")
    if (!token) {
        return <Navigate to="/login" replace />
    }

    return children

}

export default ProtectRoute
