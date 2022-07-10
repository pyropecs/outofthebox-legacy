import App from "../App.jsx";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
import { CreateComponent } from "../components/Create";
import { AuthProvider, NameProvider } from "../context/context";
import ProtectedRoute from "./protected.jsx";

const RouteCompo = () => {
  return (
    <NameProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="signup" element={<SignUpRoute />} />
          <Route element={<ProtectedRoute />}>
            <Route path="create" element={<CreateComponent />} />
          </Route>
        </Routes>
      </AuthProvider>
    </NameProvider>
  );
};

export default RouteCompo;
