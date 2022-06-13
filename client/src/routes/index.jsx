import App from "../App.jsx";
import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
const index = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUpRoute />} />
    </Routes>
  );
};

export default index;
