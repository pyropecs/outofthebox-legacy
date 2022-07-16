import Categories from "./categories";
import { useState } from "react";
import SideBarToggle from "./toggleSidebar";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  if (navToggle) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "scroll";
    document.documentElement.style.overflowX = "hidden";
  }
  return (
    <header className="bg-black h-20 w-full      text-stone-200   pt-2   ">
      <div className=" absolute left-1/3 ">
        <Link to="/" className="flex">
          <h1 className="font-sans font-semibold max-w-full pt-5 text-2xl pl-4 pr-3 border-solid border-r-2 border-b-stone-200 tracking-wide">
            OutOfTheBox
          </h1>
          <img
            src="/brainstorm.png"
            alt="mo img"
            className="p-3 hidden md:block  w-16  transition ease-out object-cover hover:animate-bounce"
          />
        </Link>
      </div>

      <nav
        className=" absolute  right-0  text-lg transition  ease-in duration-300   "
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? <SideBarToggle /> : <Categories />}
      </nav>
      {navToggle ? <Sidebar /> : ""}
      {navToggle ? (
        <div
          onClick={() => setNavToggle(false)}
          className="h-screen  opacity-30 z-0 absolute  bg-black w-full"
        ></div>
      ) : (
        ""
      )}
    </header>
  );
}
