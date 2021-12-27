import { blogPostContext } from "context/useBlogPostData";
import { getHoveredElement } from "helpers/helpers";
import { useContext, useEffect, useRef, useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import

const SingleCategoryListItem = ({ category }) => {
  const { updateCategory, deleteCategory } = useContext(blogPostContext);
  const inputRef = useRef(null);
  const initialState = {
    isEditingModeOn: false,
    newName: category.name,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.isEditingModeOn) inputRef.current.focus();
  }, [state.isEditingModeOn]);

  const handleOnBlur = () => {
    if (getHoveredElement() !== "save-button") setState({ newName: category.name, isEditingModeOn: false });
  };

  const deleteOnClick = () => {
    confirmAlert({
      title: "Are you sure?",
      message: `You are about to delete the category named "${category.name}".
      After this process, all the blog posts that belong to this category
      are going to be absent from a category`,
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteCategory(category.id),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

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
                onBlur={() => handleOnBlur()}
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
                id="save-button"
              >
                Save
              </button>
            )}
          </div>
          <div className="col-lg-2">
            <button onClick={() => deleteOnClick()} className="btn text-white px-4 br-2 delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryListItem;
