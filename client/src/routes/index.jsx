import App from "../App.jsx";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
import { CreateComponent } from "../components/Create";
import { nameContext } from "../context";
const index = () => {
  const [UserName, setUserName] = useState("");

  return (
    <nameContext.Provider value={{ UserName, setUserName }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<SignUpRoute />} />
        <Route
          path="create"
          element={<CreateComponent nameContext={nameContext} />}
        />
      </Routes>
    </nameContext.Provider>
  );
};

export default index;
