import App from "../App.jsx";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/login/index.jsx";
const index = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default index;
