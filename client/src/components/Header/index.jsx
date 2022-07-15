import Categories from "./categories";
import { useState } from "react";
import SideBarToggle from "./toggleSidebar";
import Sidebar from "./sidebar";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <header className="bg-black h-20 w-full  text-stone-200   pt-2   ">
      <div className=" absolute left-1/3 ">
        <a href="/" className="flex">
          <h1 className="font-sans font-semibold max-w-full pt-5 text-2xl pl-4 pr-3 border-solid border-r-2 border-b-stone-200 tracking-wide">
            OutOfTheBox
          </h1>
          <img
            src="./src/public/brainstorm.png"
            alt="mo img"
            className="p-3   w-16  transition ease-out object-cover hover:animate-bounce"
          />
        </a>
      </div>

      <nav
        className=" absolute  right-0  text-lg transition ease-in duration-300   "
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? <SideBarToggle /> : <Categories />}
      </nav>
      {navToggle ? <Sidebar /> : ""}
    </header>
  );
}
