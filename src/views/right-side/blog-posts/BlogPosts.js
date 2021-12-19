import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import "./BlogPost.scss";

const BlogPosts = () => {
  return (
    // <div className="row no-gutters justify-content-center">
    //   <div className="col-lg-10">
    <>
      <div className="row no-gutters justify-content-center px-5 my-5">
        <div className="col-lg-12 d-flex justify-content-end">
          <button className="btn bg-success font--prompt fs--09rem fsw--500 text-white">Yeni İçerik Ekle</button>
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
