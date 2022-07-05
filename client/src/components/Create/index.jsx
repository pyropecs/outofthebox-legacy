import { FaPlus } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useName } from "../../context/context";

export const CreateComponent = () => {
  const [exist, setExist] = useState(false);
  const { UserName } = useName();
  const navigate = useNavigate();
  if (UserName === "11000") {
    setExist(true);
  }
  const iconArray = [FaPlus, GiSpanner];
  return (
    <>
      {/* <div className="">hi {exist ? UserName : "user already exist"}</div> */}
      <div className="h-screen bg-gray-200">
        <header className="bg-black w-20 h-full  text-stone-200  font-semibold pt-2   border-solid border-b-2 border-b-stone-200">
          <ul className="flex flex-col ">
            <NavLink to="/" className="">
              <img
                src="./src/public/brainstorm.png"
                alt="mo img"
                className="p-3   w-16  transition ease-out object-cover hover:animate-bounce"
              />
            </NavLink>

            {iconArray.map((IconName) => {
              return (
                <NavLink to="/new">
                  <div className=" text-lg  h-20 w-16 pt-2  pb-2 m-auto transition-all hover:animate-pulse ">
                    <IconName color="#fff" size={48} />
                  </div>
                </NavLink>
              );
            })}
          </ul>
        </header>

        {/* <section className="h-full ">dds</section> */}
      </div>
    </>
  );
};
