import React from "react";
import { SignUp } from "../components/SignUp";
import Header from "../components/Header";

export const SignUpRoute = () => {
  return (
    <>
      <div className="antialiased bg-gray-300 h-screen w-full text-gray-900 font-sans">
        <Header />
        <SignUp />
      </div>
    </>
  );
};
