const SingleBlogPost = () => {
  return (
    <div className="row g-0 single-blog-post">
      <div className="col-12">
        <div className="row g-0">
          <div className="col-12">
            <img className="img-fluid mx-auto d-block" src="/assets/blog-image1.jpg" alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h4 className="text-center font--prompt fs--12rem fsw--400">Başlık 1</h4>
            <p className="c-blue">
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
