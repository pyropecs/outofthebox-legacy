import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useName } from "../../context/context";

import Categories from "./catgories";

const SectionContainer = () => {
  const { Auth, setAuth } = useAuth();
  const { setUserName } = useName();

  useEffect(() => {
    const userCredit = JSON.parse(localStorage.getItem("user"));

    if (userCredit) {
      setAuth({ user: userCredit });
      setUserName(userCredit.name);
    } else {
      setAuth({ user: false });
    }
  }, []);

  return (
    <>
      <div className="bg-gray-100  font-poppins leading-normal tracking-normal">
        <div className="bg-showcase   h-screen bg-cover  flex items-center justify-center text-center">
          <div className="bg-green-600 bg-opacity-70 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
            <h1 className="font-bold text-xl mb-2 md:mb-4 md:text-3xl">
              You Want To Share Some Of Your Best Stories?
            </h1>
            <p>
              Write your stories that you want tell to it to the world in 3
              steps
            </p>
            <button
              type="button"
              className="bg-gray-800 text-white uppercase py-2 px-7 mt-5 rounded-full inline-block sm:mt-8 text-sm tracking-wider"
            >
              <Link to="/create" replace>
                Sign Up
              </Link>
            </button>
          </div>
        </div>
        <Categories />
      </div>
    </>
  );
};

export default SectionContainer;
