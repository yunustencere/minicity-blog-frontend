import React, { useRef } from "react";
import "./BlogPostForm.scss";

const BlogPostForm = () => {
  const inputRef = useRef(null);
  return (
    <div className="row category-list">
      <div className="col-lg-12">
        <div className="row justify-content-center py-3">
          <div className="col-lg-4">
            <div className="row g-0 py-2">
              <div className="col-lg-12">
                <h2 className="text-center font--prompt fs--18rem fsw--200">Create New Blog Post</h2>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="blog-post-title">
                  Title:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <input className="w-100" type="text" id="blog-post-title" />
              </div>
            </div>
            <div className="row g-0 pt-4">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="blog-post-title">
                  Picture:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <button
                  className="btn bg-green c-blue br-2 px-4 "
                  onClick={() => inputRef.current.click()}
                >
                  Upload +
                </button>
                <input className="d-none" type="input" id="blog-post-title" />
              </div>
            </div>
            <div className="row g-0 pt-4">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="blog-post-title">
                  Text:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <textarea className="c-blue w-100 blog-post-textarea"></textarea>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="blog-post-title">
                  Category:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <select className="w-100 blog-post-select">
                  <option value={""}>select</option>
                  <option value={"category1"}>category1</option>
                  <option value={"category2"}>category2</option>
                </select>
              </div>
            </div>
            <div className="row g-0 pt-5">
              <div className="col-lg-12">
                <button className="btn bg-green c-blue px-4 font--prompt fs--09rem fsw--500 blog-post-create-btn">
                  Add New Blog Post +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
