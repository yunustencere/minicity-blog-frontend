import { blogPostContext } from "context/useBlogPostData";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS, CATEGORY_LIST } from "../../../routes/routes";
import "./CategoryMenu.scss";
import SingleCategory from "./SingleCategory";

const CategoryMenu = () => {
  const { blogPostData, showAll, showUncategorized } = useContext(blogPostContext);
  return (
    <div className="row justify-content-center category-menu py-4">
      <div className="col-sm-12 p-0">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center font--prompt fsw--200">Categories</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            {blogPostData.blog_post_categories?.map((category) => (
              <SingleCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 justify-content-center text-center px-4 pt-4">
            <button
              onClick={() => showUncategorized()}
              className="btn br-2 w-100 font--prompt fs--10rem fsw--300 text-dark category-options-btn"
            >
              Uncategorized
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 justify-content-center text-center px-4 pt-4">
            <button
              onClick={() => showAll()}
              className="btn br-2 w-100 font--prompt fs--10rem fsw--300 text-dark category-options-btn"
            >
              All
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 justify-content-center text-center px-4 pt-4">
            <Link to={CATEGORY_LIST}>
              <button className="btn br-2 w-100 font--prompt fs--10rem fsw--300 text-dark category-options-btn">
                Category Options
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
