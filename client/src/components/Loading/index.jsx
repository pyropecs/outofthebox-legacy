import React from "react";
import { Navigate } from "react-router-dom";
import { HashLoader, SyncLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/context";
const Loading = () => {
  const location = useLocation().from;
  const { Loading } = useAuth();
  console.log(location);
  if (Loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="text-black">
          <HashLoader color="#07a81c" className="pl-5" size={100} />
          <h2 className="font-poppins  -ml-14  text-lg  pt-10">
            Redirecting To the Page.
          </h2>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/create" state={{ from: location }} replace />;
  }
};

export default Loading;
