import React from "react";
import { Link } from "react-router-dom";

export const Form = ({ Error }) => {
  return (
    <>
      <form className="mb-4" action="/login" method="post">
        <div className="mb-4 md:w-full">
          <label className="block text-xs mb-1">UserName</label>
          <input
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6 md:w-full">
          <label className="block text-xs mb-1">Password</label>
          <input
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-green-500 hover:bg-green-700  text-white uppercase text-sm font-semibold px-4 py-2 rounded">
          SignUp
        </button>

        {Error ? (
          <div className="text-red-600 pt-3 text-sm ">{`${Error}`}</div>
        ) : (
          ""
        )}
      </form>
      <div className="pt-2 text-sm">
        Doesn't have an account{" "}
        <div className="text-blue-600 underline inline">
          <Link to="signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};
