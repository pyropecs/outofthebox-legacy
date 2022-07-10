import { useEffect, useState, useContext } from "react";

import { Form } from "./form";
import { useAuth, useName } from "../../context/context";
import { useLocation, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState("");
  const [error, setError] = useState("");
  const { Auth, setAuth } = useAuth();

  const { register } = useName();
  let location = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    setAuth({ user: true });
  }, []);

  async function SubmitDataHandler(e) {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };
    try {
      let res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(userData),
      });
      let resDatas = await res.json();
      setResData(resDatas);

      ResData(resDatas);
    } catch (err) {
      console.log(err);
    }

    navigate(location.from.pathname, { replace: true });
  }
  function ResData(resDatas) {
    if (resDatas.code === 11000) {
      setError("userName or email already exist");
    }

    if (typeof resDatas === "string") {
      setError(resDatas);
    } else {
      resDatas = {
        user: resDatas,
      };
      setAuth(resDatas);
    }
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
            Error={error}
          />
        </div>
      </div>
    </>
  );
};
