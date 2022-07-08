import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/context";

const ProtectedRoute = ({ children }) => {
  const { Auth, navigate } = useAuth();
  console.log(Auth);
  if (!Auth) {
    console.log(Auth);
    return navigate("/signup", { replace: true });
  } else {
    return Auth ? children : <Outlet />;
  }
};

export default ProtectedRoute;
