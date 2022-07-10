import React from "react";
import { HashLoader, SyncLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-black">
        <HashLoader color="#07a81c" classname="pl-5" size={100} />
        <h2 className="font-poppins  -ml-14  text-lg  pt-10">
          Redirecting To the Page.
        </h2>
      </div>
    </div>
  );
};

export default Loading;
