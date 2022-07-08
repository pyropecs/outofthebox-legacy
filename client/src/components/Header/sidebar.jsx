import React from "react";
import { FaBookReader, FaPenFancy, FaChild } from "react-icons/fa";
import { GiFairyWand, GiStrong } from "react-icons/gi";
import { Link } from "react-router-dom";
const sidebar = () => {
  return (
    <div className=" transition duration-300  transform bg-white h-full  fixed w-72 top-20 right-0 text-black ">
      <ul className="font-bold capitalize   pb-6  text-lg">
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-10 h-20 pl-3 pt-5 pb-5">
          <a href="" className="flex ">
            <FaBookReader size={28} /> <p className="pl-6 ">true stories</p>
          </a>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <a href="" className="flex  transition transform  ">
            <FaChild color="violet" size={28} />{" "}
            <p className="pl-6">your life superhuman</p>
          </a>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <a href="" className="flex  transition transform  ">
            <GiFairyWand color="orange" size={28} />{" "}
            <p className="pl-6">fantasy</p>
          </a>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <a href="" className="flex  transition transform  ">
            <GiStrong color="#34B3F1" size={28} />{" "}
            <p className="pl-6">Real incident</p>
          </a>
        </li>

        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <Link to="/signup" className="flex  transition transform  ">
            <FaPenFancy color="#7D1E6A" size={28} />{" "}
            <p className="pl-6">become a story writer</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
