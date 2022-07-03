import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CreateComponent = ({ nameContext }) => {
  const { UserName } = useContext(nameContext);
  const navigate = useNavigate();
  navigate(-1);
  return <div className="">hi {UserName.users}</div>;
};
