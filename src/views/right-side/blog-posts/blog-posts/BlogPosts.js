import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import "./BlogPosts.scss";
import { BLOG_POST_FORM } from "../../../../routes/routes";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  return (
    <>
      <div className="row g-0 justify-content-center px-5 my-5">
        <div className="col-lg-12 d-flex justify-content-end">
          <Link to={BLOG_POST_FORM}>
            <button className="btn bg-green c-blue font--prompt fs--09rem fsw--500">Add New Content +</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 px-5 justify-content-center">
          <SingleBlogPost />
        </div>
        <div className="col-md-4 px-5 justify-content-center">
          <SingleBlogPost />
        </div>
        <div className="col-md-4 px-5 justify-content-center">
          <SingleBlogPost />
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
