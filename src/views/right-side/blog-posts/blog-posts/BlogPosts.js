import SingleBlogPost from "./SingleBlogPost";
import "./BlogPosts.scss";
import { BLOG_POST_FORM } from "../../../../routes/routes";
import { Link } from "react-router-dom";
import { blogPostContext } from "context/useBlogPostData";
import { useContext } from "react";

const BlogPosts = () => {
  const { blogPostData } = useContext(blogPostContext);
  return (
    <>
      <div className="row g-0 justify-content-center px-5 my-5">
        <div className="col-lg-12 d-flex justify-content-end">
          <Link to={BLOG_POST_FORM}>
            <button className="btn bg-green c-blue br-2 font--prompt fs--09rem fsw--500">Add New Content +</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {blogPostData.filtered_blog_posts.map((post) => (
          <div key={post.id} className="col-md-4 px-5 justify-content-center">
            <SingleBlogPost post={post} />
          </div>
        ))}

      </div>
    </>
  );
};

export default BlogPosts;
