import React from "react";

const SingleCategoryListItem = () => {
  return (
    <div className="row single-category-list-item">
      <div className="col-lg-12">
        <div className="row py-1">
          <div className="col-lg-8">
            <span className="fs--12rem pt-2 category-name">Name</span>
          </div>
          <div className="col-lg-2">
            <button className="btn text-white px-4 edit-button">Edit</button>
          </div>
          <div className="col-lg-2">
            <button className="btn text-white delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryListItem;
