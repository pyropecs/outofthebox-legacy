import { useEffect } from "react";
import { useContext } from "react";

export const CreateComponent = ({ nameContext }) => {
  const { UserName } = useContext(nameContext);

  return <div className="">hi {UserName.users}</div>;
};
