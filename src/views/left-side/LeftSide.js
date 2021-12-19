import React from "react";
import CategoryMenu from "./category-menu/CategoryMenu";
import "./LeftSide.scss";
const LeftSide = () => {
  return (
    <div className="col-lg-3 LeftSide">
      <div className="row no-gutters">
        <div className="col-lg-12">
          <CategoryMenu />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
