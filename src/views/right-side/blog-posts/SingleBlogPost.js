import React from "react";

const SingleBlogPost = () => {
  return (
    <div className="row no-gutters single-blog-post">
      <div className="col-12">
        <div className="row no-gutters">
          <div className="col-12">
            <img className="img-fluid" src="/assets/blog-image1.jpg" alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h4 className="text font--prompt fs--12rem fsw--400 text-dark">Başlık 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum dignissimos, beatae itaque odit
              doloremque assumenda fugit placeat accusamus saepe. Quod odio dolor rerum, modi dignissimos labore! Amet,
              nemo distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
