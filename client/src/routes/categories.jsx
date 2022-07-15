import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";

const CategoriesRoute = () => {
  let route = useParams();

  return (
    <>
      <div className="font-poppins text-lg">
        <Categories route={route.categories} />
      </div>
    </>
  );
};

export default CategoriesRoute;
