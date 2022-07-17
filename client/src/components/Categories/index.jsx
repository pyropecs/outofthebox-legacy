import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchGetAsync } from "../../utils/fetchGet";
import Cards from "./cards";
import Loading from "./loading";
import Footer from "../Footer";
const Categories = ({ route }) => {
  const title = route.split("+").join(" ");
  const [ResData, setResData] = useState("");
  async function getUsers() {
    const resData = await fetchGetAsync(route);
    const cards = resData?.blogs.map((blog, idx) => {
      console.log(blog);

      const newImgUrl = imgOptimizer(blog.imgUrl);
      return {
        ...blog,
        imgUrl: newImgUrl,
      };
    });
    setResData(cards);
    ///https://res.cloudinary.com/dvb6lx7rm/image/upload/c_scale,q_60,w_390/v1657691416/out_of_the_box/byrcaxsi2oxqjns3wpdv.jpg
  }

  function imgOptimizer(imgUrl) {
    const urlArray = imgUrl.split("/");
    urlArray.shift();
    urlArray.splice(5, 0, "c_scale,q_60,w_720");
    const newImgUrl = `https:/${urlArray.join("/")}`;

    return newImgUrl;
  }

  useEffect(() => {
    getUsers();

    return () => {
      ResData;
    };
  }, [route]);

  return (
    <>
      <div className="min-h-screen">
        {ResData ? <Cards ResData={ResData} title={title} /> : <Loading />}
      </div>
      <Footer />
    </>
  );
};

export default Categories;
