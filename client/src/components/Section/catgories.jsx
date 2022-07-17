import { useId } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  categories,
  Content,
  CateGoriesRoute,
} from "../../fixtures/categoriesArray";

const Categories = () => {
  const id = useId();

  return (
    <>
      {categories.map((category, index) => {
        const flexDirection =
          (index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";
        const imgCard3 = index + 1 === 3 ? "md:w-[678px]" : "w-[720px]";
        return (
          <div
            key={`${id}${index}`}
            className={`flex ${flexDirection} font-poppins flex-col items-center bg-gray-100`}
          >
            <img
              src={`/card/card${index + 1}.jpg`}
              className={`h-[28rem] ${imgCard3} w-[720px] `}
              alt="true Stories"
            />
            <div className="flex flex-col h-auto p-8 bg-gray-100 w-full">
              <h1 className="font-semibold text-center text-5xl inline-block text-zinc-900 transition duration-500 ease-in-out">
                {category}
              </h1>
              <p className="text-xl text-center mt-6">{Content[index]}</p>
              <div>
                <div className="w-[182px] m-auto pt-10 hover:scale-110 transition duration-200">
                  <Link
                    to={`/categories/${CateGoriesRoute[index]}`}
                    className="bg-green-500 text-white pl-6 rounded-full  shadow-lg flex items-center"
                    state={CateGoriesRoute[index]}
                  >
                    <span className="mr-2 text-base">Read More</span>{" "}
                    <span className="bg-green-600 hover:bg-green-800 w-16 h-16  flex items-center justify-center rounded-full ">
                      <FaChevronRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
