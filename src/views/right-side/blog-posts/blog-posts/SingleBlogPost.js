const SingleBlogPost = ({ post }) => {
  return (
    <div className="row g-0 single-blog-post">
      <div className="col-12">
        <div className="row g-0">
          <div className="col-12">
            <img
              className="img-fluid mx-auto d-block"
              //  src="/assets/blog-image1.jpg"
              src={post.image_url}
              alt=""
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h4 className="text-center font--prompt fs--12rem fsw--400">{post.title}</h4>
            <p className="c-blue">{post.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
