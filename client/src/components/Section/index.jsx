import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Categories from "./catgories";

const SectionContainer = () => {
  return (
    <>
      <div class="bg-gray-100  font-poppins leading-normal tracking-normal">
        <div class="bg-showcase   h-screen bg-cover  flex items-center justify-center text-center">
          <div class="bg-green-600 bg-opacity-70 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
            <h1 class="font-bold text-xl mb-2 md:mb-4 md:text-3xl">
              You Want To Share Some Of Your Best Stories?
            </h1>
            <p>
              Write your stories that you want tell to it to the world in 3
              steps
            </p>
            <button
              type="button"
              class="bg-gray-800 text-white uppercase py-2 px-7 mt-5 rounded-full inline-block sm:mt-8 text-sm tracking-wider"
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
