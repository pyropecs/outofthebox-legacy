import { useEffect, useState, useContext } from "react";

import { Form } from "./form";
import { useAuth, useName } from "../../context/context";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState("");
  const [error, setError] = useState("");
  const { setAuth, Loading, setLoading } = useAuth();

  const { setUserName } = useName();
  let location = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  async function SubmitDataHandler(e) {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    try {
      setLoading(true);
      let res = await fetch(
        "https://outofthebox.onrender.com/signup",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(userData),
        }
      ).catch(() => {
        setLoading(false);

        setAuth({ user: false });
      });
      let resDatas = await res.json();

      setResData(resDatas);

      ResData(resDatas);
    } catch (err) {
      console.log(err);
      navigate("/signup");
    }
  }
  function ResData(resDatas) {
    if (resDatas.code === 11000) {
      setError("userName or email already exist");
      setLoading(false);
      navigate("/signup");
    }

    if (typeof resDatas === "string") {
      setError(resDatas);
      setLoading(false);
      navigate("/signup");
    } else {
      localStorage.setItem("user", JSON.stringify(resDatas));
      setAuth(resDatas);
      setUserName(name);
      setLoading(false);
      navigate("/create");
    }
  }
  if (Loading) {
    return <Navigate to="*" state={{ from: location }} replace />;
  } else {
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
  }
};
