import { FaPlus, FaBars, FaTimes } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { IoIosExit } from "react-icons/io";

import { useState, useId } from "react";
import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useAuth } from "../../context/context";
import BlogForm from "./BlogForm";
import LoadingCompo from "../Loading";
import { useEffect } from "react";

export const CreateComponent = () => {
  const { Auth, setAuth, Loading } = useAuth();
  const [BarClick, setBarClick] = useState(false);
  const iconArray = [FaPlus, GiSpanner, IoIosExit];
  const id = useId();

  function logout() {
    localStorage.removeItem("user");

    setAuth({ user: false });
  }

  const display = BarClick ? "block" : "hidden";
  function menuHandler() {
    setBarClick((prev) => !prev);
  }

  return (
    <>
      <div className="h-screen overflow-scroll bg-white flex md:gap-24 ">
        <header
          className={`bg-black w-20 h-full ${display}   md:block text-stone-200  font-semibold pt-2   border-solid border-b-2 border-b-stone-200`}
        >
          <ul className="flex flex-col ">
            <Link to="/" className="">
              <img
                src="/brainstorm.png"
                alt="mo img"
                className="p-3   w-16  transition ease-out object-cover hover:animate-bounce"
              />
            </Link>

            {iconArray.map((IconName, index) => {
              if (index !== iconArray.length - 1) {
                return (
                  <Link to="/new" key={`${id}${index}`}>
                    <div className=" text-lg  h-20 w-16 pt-2  pb-2 m-auto transition-all hover:animate-pulse visited::text-green-200 ">
                      <IconName color="#fff" size={48} />
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link to="/login" id={index} key={`${id}${index}`}>
                    <div
                      onClick={logout}
                      className=" text-lg  h-20 w-16 pt-2  pb-2 m-auto transition-all hover:animate-pulse visited::text-green-200 "
                    >
                      <IconName color="#fff" size={48} />
                    </div>
                  </Link>
                );
              }
            })}
          </ul>
        </header>
        <div
          className="block md:hidden h-20  w-auto cursor-pointer p-5"
          onClick={menuHandler}
        >
          {BarClick ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {Loading ? <LoadingCompo /> : <BlogForm />}
      </div>
    </>
  );
};
