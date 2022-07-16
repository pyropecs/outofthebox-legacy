import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import Header from "../components/Header";

const CategoriesRoute = () => {
  let route = useParams();

  return (
    <>
      <div className="font-poppins text-lg">
        <Header />
        <Categories route={route.categories} />
      </div>
    </>
  );
};

export default CategoriesRoute;
