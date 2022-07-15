import React from "react";
import { Link } from "react-router-dom";
import { useName } from "../../context/context";

const cards = ({ ResData, title }) => {
  const { setClickedBlog } = useName();

  return (
    <>
      <div className="m-auto py-10  w-full">
        <h1 className="text-2xl  capitalize font-poppins font-semibold text-center text-gray-800">
          {title}
        </h1>
      </div>
      <div className="md:grid flex flex-col  items-center  md:grid-cols-3  h-auto w-full">
        {ResData?.map((blog, elem) => {
          return (
            <Link onClick={() => setClickedBlog(blog)} to={blog._id}>
              <div
                className={`max-w-sm  relative rounded m-3 overflow-hidden   shadow-lg `}
              >
                <img
                  className="w-full "
                  src={blog.imgUrl}
                  alt="Sunset in the mountains"
                />
                <div className="absolute h-[23.8rem] w-full top-0  bg-black opacity-40"></div>
                <div className="px-6 py-4 absolute bg w-full    text-white bottom-16">
                  <div className="font-medium capitalize text-xl mb-2  opacity-100 text-white">
                    {blog.title}
                  </div>
                  <p className="text-white text-base opacity-100">
                    {blog.name}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block  bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                    {blog.categories}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default cards;
