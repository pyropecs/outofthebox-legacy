import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserPostAsync } from "../../utils/fetchUserPost";
import { useNavigate } from "react-router-dom";
import { useAuth, useName } from "../../context/context";

export const Form = ({ Error, setError }) => {
  const [Name, setName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Credentials, setCredentials] = useState({});
  let navigate = useNavigate();
  const { setAuth, setLoading } = useAuth();
  const { setUserName } = useName();

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    const credentials = {
      name: Name,
      password: PassWord,
    };
    try {
      const resData = await fetchUserPostAsync(credentials);
      if (resData === "Invalid Credentials") {
        setError("password and username incorrect");
        setLoading(false);
      } else {
        setCredentials(resData);
        setUserName(resData.name);
        setAuth({ user: resData });
        setLoading(false);
        navigate("/create", { replace: true });
        localStorage.setItem("user", JSON.stringify(resData));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      <form className="mb-4" onSubmit={submitHandler} method="post">
        <div className="mb-4 md:w-full">
          <label className="block text-xs mb-1">UserName</label>
          <input
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6 md:w-full">
          <label className="block text-xs mb-1">Password</label>
          <input
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700  text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        >
          SignUp
        </button>
      </form>

      {Error ? (
        <div className="text-red-600 pt-3 text-sm ">{`${Error}`}</div>
      ) : (
        ""
      )}
      <div className="pt-2 text-sm">
        Doesn't have an account{" "}
        <div className="text-blue-600 underline inline">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};
