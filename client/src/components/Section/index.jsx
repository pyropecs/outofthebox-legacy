import React from "react";
import { Link } from "react-router-dom";

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

        <div class="mx-5 my-16 md:my-24 sm:grid grid-cols-2 gap-5 justify-items-center md:max-w-3xl md:mx-auto md:mt-24 md:mb-24">
          <div class="text-center bg-white shadow-lg md:max-w-sm">
            <div class="px-7 py-9">
              <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">
                Ready for spring collection
              </h2>
              <p>
                Treat yourself to some of our brand new spring collection - all
                with wonderful colours surrounding you.
              </p>
              <button
                type="button"
                class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white"
              >
                purchase now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1514861997808-4789788dded2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Spring collection"
              class="h-56 object-cover w-full md:h-64"
            />
          </div>

          <div class="text-center bg-white shadow-lg md:max-w-sm">
            <div class="px-7 py-9">
              <h2 class="font-bold text-lg mb-2 md:mb-4 md:text-3xl">
                Ready for spring collection
              </h2>
              <p>
                Treat yourself to some of our brand new spring collection - all
                with wonderful colours surrounding you.
              </p>
              <button
                type="button"
                class="bg-transparent border-gray-700 border-2 text-gray-800 font-bold uppercase py-2 px-7 mt-7 rounded-full inline-block sm:mt-8 text-xs tracking-wider hover:bg-gray-700 hover:text-white"
              >
                purchase now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              alt="Spring collection"
              class="h-56 object-cover w-full md:h-64"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionContainer;
