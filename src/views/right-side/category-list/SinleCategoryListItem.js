import { blogPostContext } from "context/useBlogPostData";
import { useContext, useEffect, useRef, useState } from "react";

const SingleCategoryListItem = ({ category }) => {
  const { updateCategory, deleteCategory } = useContext(blogPostContext);
  const inputRef = useRef(null);
  const [state, setState] = useState({
    isEditingModeOn: false,
    newName: category.name,
  });
  useEffect(() => {
    if (state.isEditingModeOn) inputRef.current.focus();
  }, [state.isEditingModeOn]);

  return (
    <div className="row single-category-list-item">
      <div className="col-lg-12">
        <div className="row py-1">
          <div className="col-lg-8">
            {!state.isEditingModeOn ? (
              <span className="fs--12rem pt-2 category-name">{category.name}</span>
            ) : (
              <input
                ref={inputRef}
                className="fs--12rem pt-2 category-name"
                value={state.newName}
                type="text"
                onChange={(e) => setState({ ...state, newName: e.target.value })}
              />
            )}
          </div>
          <div className="col-lg-2">
            {!state.isEditingModeOn ? (
              <button
                onClick={() => {
                  setState({ ...state, isEditingModeOn: true });
                }}
                className="btn text-white px-4 br-2 edit-button"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => updateCategory(category.id, state.newName, setState)}
                className="btn text-white px-4 br-2 edit-button"
              >
                Save
              </button>
            )}
          </div>
          <div className="col-lg-2">
            <button onClick={() => deleteCategory(category.id)} className="btn text-white px-4 br-2 delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryListItem;
