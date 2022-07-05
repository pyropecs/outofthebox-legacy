import { useContext } from "react";
import { createContext, useState } from "react";

const nameContext = createContext();

export function NameProvider({ children }) {
  const [UserName, setUserName] = useState("");

  const register = (UserName) => {
    setUserName(UserName);
  };
  return (
    <nameContext.Provider value={{ register, UserName }}>
      {children}
    </nameContext.Provider>
  );
}

export const useName = () => {
  return useContext(nameContext);
};
