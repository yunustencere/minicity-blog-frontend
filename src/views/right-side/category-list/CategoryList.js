import React from "react";
import SingleCategoryListItem from "./SinleCategoryListItem";
import "./CategoryList.scss";

const CategoryList = () => {
  return (
    <div className="row category-list">
      <div className="col-lg-12">
        <div className="row justify-content-center py-3">
          <div className="col-lg-8">
            <h2 className="text-center font--prompt fs--18rem fsw--200">Category Options</h2>
          </div>
        </div>
        <SingleCategoryListItem />
        <SingleCategoryListItem />
        <SingleCategoryListItem />
      </div>
    </div>
  );
};

export default CategoryList;
