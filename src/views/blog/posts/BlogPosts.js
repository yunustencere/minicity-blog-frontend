import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import "./BlogPost.scss";

const BlogPosts = () => {
  return (
    <div className="row">
      <div className="col-md-4 justify-content-center">
        <SingleBlogPost/>
      </div>
      <div className="col-md-4 justify-content-center">
        <SingleBlogPost/>
      </div>
      <div className="col-md-4 justify-content-center">
        <SingleBlogPost/>
      </div>
    </div>
  );
};

export default BlogPosts;
