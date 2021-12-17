import React from "react";

const SingleBlogPost = () => {
  return (
    <div className="row single-blog-post">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <img className="img-fluid single-blogpost-image" src="/assets/blog-image1.jpg" alt="" />
            {/* <img src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png" alt="" /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4 className="text"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
