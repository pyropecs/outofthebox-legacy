import App from "../App.jsx";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
import { CreateComponent } from "../components/Create";
import { AuthProvider, NameProvider } from "../context/context";
import ProtectedRoute from "./protected.jsx";
import LoadingRoute from "./loading.jsx";
import LoginRoute from "./login.jsx";
import Categories from "./categories.jsx";
import BlogPage from "../components/BlogPage";

const RouteCompo = () => {
  return (
    <NameProvider>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<LoadingRoute />} />
          <Route path="/" element={<App />} />
          <Route path="/categories/:categories" element={<Categories />} />
          <Route
            path="/categories/:categories/:userid"
            element={<BlogPage />}
          />

          <Route path="signup" element={<SignUpRoute />} />
          <Route path="login" element={<LoginRoute />} />

          <Route element={<ProtectedRoute />}>
            <Route path="create" element={<CreateComponent />} />
          </Route>
        </Routes>
      </AuthProvider>
    </NameProvider>
  );
};

export default RouteCompo;
