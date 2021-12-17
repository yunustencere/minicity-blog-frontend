import React from "react";
import "./Category.scss";
import SingleCategory from "./SingleCategory";

const CategoryMenu = () => {
  return (
    <div className="row justify-content-center my-2 category-menu">
      <div className="col-sm-8">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center">Categories</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <SingleCategory />
            <SingleCategory />
            <SingleCategory />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 justify-content-center text-center">
              <button className="btn btn-primary">Kategori İşlemleri</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
