import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./form";

export const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState("");
  useEffect(() => {
    console.log(resData);
  }, [resData]);
  if (resData) {
    navigate("/create", { replace: true });
  }

  async function SubmitDataHandler(e) {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };

    let res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    let resDatas = await res.json();
    console.log(resDatas);
    setResData(resDatas);
  }

  return (
    <>
      <div className="flex items-center h-4/5 w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Sign Up
          </span>
          <Form
            SubmitDataHandler={SubmitDataHandler}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  );
};
