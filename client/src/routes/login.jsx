import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import { useAuth } from "../context/context";
import LoadingRoute from "./loading";

const LoginRoute = () => {
  const { Loading } = useAuth();

  return (
    <div className="antialiased bg-gray-300 h-screen w-full text-gray-900 font-sans">
      <Header />
      {Loading ? <LoadingRoute /> : <Login />}
    </div>
  );
};

export default LoginRoute;
