import { blogPostContext } from "context/useBlogPostData";
import { useContext, useRef, useState } from "react";
import "./BlogPostForm.scss";

const BlogPostForm = () => {
  const { blogPostData, createPost } = useContext(blogPostContext);
  const fileInputRef = useRef(null);
  const [state, setState] = useState({
    title: "",
    file: null,
    text: "",
    blog_post_category_id: "",
  });

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
                <input
                  className="w-100"
                  value={state.title}
                  onChange={(e) => setState({ ...state, title: e.target.value })}
                  type="text"
                  id="blog-post-title"
                />
              </div>
            </div>
            <div className="row g-0 pt-4">
              <div className="col-lg-12">
                <label className="c-blue" htmlFor="blog-post-picture">
                  Picture:
                </label>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-lg-12">
                <button className="btn bg-green c-blue br-2 px-4 " onClick={() => fileInputRef.current.click()}>
                  Upload +
                </button>
                <input
                  className="d-none"
                  type="file"
                  id="blog-post-picture"
                  onChange={(e) => setState({ ...state, file: e.target.files[0] })}
                  ref={fileInputRef}
                />
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
                <textarea
                  className="c-blue w-100 blog-post-textarea"
                  value={state.text}
                  onChange={(e) => setState({ ...state, text: e.target.value })}
                ></textarea>
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
                <select
                  className="w-100 blog-post-select"
                  value={state.blog_post_category_id}
                  onChange={(e) => setState({ ...state, blog_post_category_id: e.target.value })}
                >
                  <option value={""}>select</option>
                  {blogPostData.blog_post_categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row g-0 pt-5">
              <div className="col-lg-12">
                <button onClick={()=> createPost(state)} className="btn bg-green c-blue px-4 font--prompt fs--09rem fsw--500 blog-post-create-btn">
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
