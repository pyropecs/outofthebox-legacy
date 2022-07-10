import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/context";

const ProtectedRoute = ({ children }) => {
  const { Auth, setAuth } = useAuth();

  const location = useLocation();
  return Auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
