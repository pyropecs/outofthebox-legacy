import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const nameContext = createContext();
const authContext = createContext();
export function NameProvider({ children }) {
  const [UserName, setUserName] = useState("");
  const [success, setSuccess] = useState("");
  const [CurrentRoute, setCurrentRoute] = useState("");
  const [ClickedBlog, setClickedBlog] = useState({});
  const register = (UserName) => {
    if (UserName != 11000) {
      setUserName(UserName);
    }
  };
  return (
    <nameContext.Provider
      value={{
        ClickedBlog,
        setClickedBlog,
        register,
        CurrentRoute,
        setCurrentRoute,
        UserName,
        setUserName,
        success,
        setSuccess,
      }}
    >
      {children}
    </nameContext.Provider>
  );
}

export const useName = () => {
  return useContext(nameContext);
};

export function AuthProvider({ children }) {
  const getUsers = JSON.parse(localStorage.getItem("user"));
  const [Auth, setAuth] = useState({ user: getUsers });
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [Error, setError] = useState("");
  useEffect(() => {
    if (getUsers) {
      setAuth(getUsers);
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        Auth,
        Loading,
        setLoading,
        setAuth,
        Error,
        setError,

        navigate,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
