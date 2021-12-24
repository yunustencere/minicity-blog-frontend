import { Route, Routes } from "react-router-dom";
import { BLOG_POSTS, BLOG_POST_FORM, CATEGORY_FORM, CATEGORY_LIST } from "../../routes/routes";
import BlogPostForm from "./blog-posts/blog-post-form/BlogPostForm";
import BlogPosts from "./blog-posts/blog-posts/BlogPosts";
import CategoryForm from "./category-form/CategoryForm";
import CategoryList from "./category-list/CategoryList";
import "./RightSide.scss";

const RightSide = () => {
  return (
    <div className="col-lg-10 RightSide">
      <div className="row g-0">
        <div className="col-lg-12 bgColor h-100">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-10">
              <Routes>
                <Route path={BLOG_POSTS} element={<BlogPosts />} />
                <Route path={BLOG_POST_FORM} element={<BlogPostForm />} />
                <Route path={CATEGORY_FORM} element={<CategoryForm />} />
                <Route path={CATEGORY_LIST} element={<CategoryList />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
