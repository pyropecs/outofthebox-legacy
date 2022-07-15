import { useContext } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const nameContext = createContext();
const authContext = createContext();
export function NameProvider({ children }) {
  const [UserName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);
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
  const [Auth, setAuth] = useState({ user: false });
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [UserExist, setUserExist] = useState(false);
  const login = (userExist) => {
    setAuth(true);
    if (userExist) {
      return;
    } else {
      navigate("/create", { replace: true });
    }
  };
  const logout = () => {};

  return (
    <authContext.Provider
      value={{
        Auth,
        Loading,
        setLoading,
        setAuth,
        login,
        logout,
        navigate,
        UserExist,
        setUserExist,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
