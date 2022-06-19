import App from "../App.jsx";
import { Routes, Route } from "react-router-dom";
import { SignUpRoute } from "./signUp";
import { CreateComponent } from "../components/Create";
const index = () => {
  const aple = "ppop";
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUpRoute />} />
      <Route path="create" element={<CreateComponent aple={aple} />} />
    </Routes>
  );
};

export default index;
