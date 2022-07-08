import { FaPlus } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import { useAuth, useName } from "../../context/context";
import BlogForm from "./BlogForm";

export const CreateComponent = () => {
  const { UserExist } = useAuth();
  const navigate = useNavigate();

  if (UserExist) {
    navigate("/signup", { replace: true });
  }
  const iconArray = [FaPlus, GiSpanner];
  return (
    <>
      {/* <div className="">hi {exist ? UserName : "user already exist"}</div> */}
      <div className="h-screen bg-white flex md:gap-24 ">
        <header className="bg-black w-20 h-full  text-stone-200  font-semibold pt-2   border-solid border-b-2 border-b-stone-200">
          <ul className="flex flex-col ">
            <Link to="/" className="">
              <img
                src="./src/public/brainstorm.png"
                alt="mo img"
                className="p-3   w-16  transition ease-out object-cover hover:animate-bounce"
              />
            </Link>

            {iconArray.map((IconName) => {
              return (
                <Link to="/new">
                  <div className=" text-lg  h-20 w-16 pt-2  pb-2 m-auto transition-all hover:animate-pulse visited::text-green-200 ">
                    <IconName color="#fff" size={48} />
                  </div>
                </Link>
              );
            })}
          </ul>
        </header>
        <BlogForm />
      </div>
    </>
  );
};
