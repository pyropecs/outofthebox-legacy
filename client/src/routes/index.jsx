import App from "../App.jsx";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
import { CreateComponent } from "../components/Create";
import { NameProvider } from "../context/context";
const index = () => {
  return (
    <NameProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<SignUpRoute />} />
        <Route path="create" element={<CreateComponent />} />
      </Routes>
    </NameProvider>
  );
};

export default index;
