import { blogPostContext } from "context/useBlogPostData";
import { useContext } from "react";

const SingleCategory = ({ category }) => {
  const { blogPostData, setSelectedCategory } = useContext(blogPostContext);

  return (
    <button
      onClick={() => setSelectedCategory(category.id)}
      className={`btn btn-block ${blogPostData.selectedCategory === category.id ? "active-btn" : ""} w-100 bg-transparent font--prompt fs--12rem fsw--400 c-white py-3 single-category-btn`}
    >
      {category.name}
    </button>
  );
};

export default SingleCategory;
