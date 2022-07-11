import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginRoute = () => {
  return (
    <div className="antialiased bg-gray-300 h-screen w-full text-gray-900 font-sans">
      <Header />
      <Login />
    </div>
  );
};

export default LoginRoute;
