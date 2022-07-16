import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/context";
import { Form } from "./Form";

const Login = () => {
  const { Error, setError } = useAuth();

  return (
    <>
      <div className="flex items-center h-4/5 w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Log In
          </span>
          <Form Error={Error} setError={setError} />
        </div>
      </div>
    </>
  );
};

export default Login;
