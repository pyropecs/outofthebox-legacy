import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./form";
import { useName } from "../../context/context";
import { useLocation } from "react-router-dom";
export const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState("");
  const { register } = useName();
  let location = useLocation(); //i didnt yet used it

  useEffect(() => {
    function revertToSignIn() {
      setResData("user already exists");
      navigate("/signup", { replace: true });
    }
  }, [location]);

  if (resData) {
    console.log(resData);
    navigate("/create", { replace: true });
  }

  console.log("aplle", location);
  async function SubmitDataHandler(e) {
    e.preventDefault();

    console.log(location);
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
      register(resDatas);
    } catch (err) {
      if (err === 11000) {
      }
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
          />
        </div>
      </div>
    </>
  );
};
