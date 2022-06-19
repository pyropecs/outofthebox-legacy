import React from "react";

export const Form = ({ SubmitDataHandler, setEmail, setName, setPassword }) => {
  return (
    <form
      className="mb-4"
      action="/signup"
      onSubmit={SubmitDataHandler}
      method="post"
    >
      <div className="mb-4 md:w-full">
        <label className="block text-xs mb-1">Full name</label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4 md:w-full">
        <label className="block text-xs mb-1">Username or Email</label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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
      <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
        SignUp
      </button>
    </form>
  );
};
