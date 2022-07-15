import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
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
};

export default loading;
