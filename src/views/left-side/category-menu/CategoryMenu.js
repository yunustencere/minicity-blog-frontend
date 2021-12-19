import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_FORM, CATEGORY_LIST } from "../../../routes/routes";
import "./CategoryMenu.scss";
import SingleCategory from "./SingleCategory";

const CategoryMenu = () => {
  return (
    <div className="row justify-content-center category-menu py-4">
      <div className="col-sm-12 p-0">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center font--prompt fs--18rem fsw--200">Categories</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            <SingleCategory />
            <SingleCategory />
            <SingleCategory />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 justify-content-center text-center px-4 pt-4">
            <Link to={CATEGORY_LIST}>
              <button className="btn category-options-btn font--prompt fs--10rem fsw--300 text-dark">
                Kategori İşlemleri
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
