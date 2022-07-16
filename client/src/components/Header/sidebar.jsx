import React from "react";
import { FaBookReader, FaPenFancy, FaChild } from "react-icons/fa";
import { GiFairyWand, GiStrong } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CateGoriesRoute } from "../../fixtures/categoriesArray";
console.log(CateGoriesRoute);
const sidebar = () => {
  return (
    <div className=" transform absolute transition-all duration-300 z-10 bg-white h-full   w-72 top-20 right-0 text-black ">
      <ul className="font-bold capitalize bg-white  pb-6  text-lg">
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-10 h-20 pl-3 pt-5 pb-5">
          <Link to={`/categories/${CateGoriesRoute[0]}`} className="flex ">
            <FaBookReader size={28} /> <p className="pl-6 ">true stories</p>
          </Link>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <Link
            to={`/categories/${CateGoriesRoute[1]}`}
            className="flex  transition transform  "
          >
            <FaChild color="violet" size={28} />{" "}
            <p className="pl-6">your life superhuman</p>
          </Link>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <Link
            to={`/categories/${CateGoriesRoute[2]}`}
            className="flex  transition transform  "
          >
            <GiFairyWand color="orange" size={28} />{" "}
            <p className="pl-6">fantasy</p>
          </Link>
        </li>
        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <Link
            to={`/categories/${CateGoriesRoute[3]}`}
            className="flex  transition transform  "
          >
            <GiStrong color="#34B3F1" size={28} />{" "}
            <p className="pl-6">Real incident</p>
          </Link>
        </li>

        <li className=" block w-full  transition-all transform duration-300 hover:bg-green-300 hover:pl-8 h-20 pl-3 pt-5 pb-5">
          <Link to="/create" className="flex  transition transform  " replace>
            <FaPenFancy color="#7D1E6A" size={28} />{" "}
            <p className="pl-6">become Link story writer</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
