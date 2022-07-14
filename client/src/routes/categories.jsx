import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  let route = useParams();

  console.log(route);

  return (
    <>
      <div className="font-poppins text-lg">{route.categories}</div>
    </>
  );
};

export default Categories;
