import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

function PublicRoutes({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  if (!token) {
    return <Navigate replace to="/login" />;
  }

  return <div>{children}</div>;
}

export default PublicRoutes;
