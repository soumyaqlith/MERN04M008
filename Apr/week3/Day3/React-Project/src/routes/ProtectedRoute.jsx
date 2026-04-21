import React, { Children } from 'react'
import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  if (!isLogin) {
    return <Navigate to="/login" replace />
  }
  return (
    <div>
      {children}
    </div>
  )


}

export default ProtectedRoute