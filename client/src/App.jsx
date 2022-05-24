import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <header className="bg-black text-stone-200 h-full w-full pt-5 pb-5 flex justify-between  border-solid border-b-2 border-b-stone-200">
      <p>jhnj</p>
      <h1 className="font-sans font-semibold text-2xl pl-10 tracking-wide">
        OutOfTheBox
      </h1>
      <nav className="p-3 basis-6 ">Categories</nav>
    </header>
  );
}
