const SingleCategory = ({ category }) => {
  return (
    <button className="btn btn-block w-100 bg-transparent font--prompt fs--12rem fsw--400 text-white py-3 single-category-btn border-bottom">
      {category.name}
    </button>
  );
};

export default SingleCategory;
