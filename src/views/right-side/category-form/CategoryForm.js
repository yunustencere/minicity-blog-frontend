import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY_LIST } from "../../../routes/routes";
import "./CategoryForm.scss";

const CategoryForm = () => {
  return (
    <div className="row category-list">
      <div className="col-lg-12">
        <div className="row justify-content-center py-3">
          <div className="col-lg-4">
            <div className="row g-0 py-2">
              <div className="col-lg-12">
                <h2 className="text-center font--prompt fs--18rem fsw--200">Create New Category</h2>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="category-form-title">
                  Category Name:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <input className="w-100" type="text" id="category-form-title" />
              </div>
            </div>

            <div className="row g-1 pt-3">
              <div className="col-lg-6">
                <Link to={CATEGORY_LIST}>
                  <button className="btn bg-white c-blue back-btn w-100 br-2 mx-1 ">Back</button>
                </Link>
              </div>
              <div className="col-lg-6">
                <button className="btn bg-green c-blue w-100 br-2 mx-1 ">Add +</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
