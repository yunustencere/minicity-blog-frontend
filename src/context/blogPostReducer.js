export const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "setBlogPostData":
      return {
        ...action.newBlogPostData,
      };
    case "createCategory":
      return {
        ...state,
        blog_post_categories: [...state.blog_post_categories, { ...action.newCategory }],
      };
    case "updateCategory":
      return {
        ...state,
        blog_post_categories: state.blog_post_categories.map((category) => {
          if (action.categoryId !== category.id) return category;
          return {
            ...category,
            name: action.newName,
          };
        }),
      };
    case "deleteCategory":
      return {
        ...state,
        blog_post_categories: state.blog_post_categories.filter((category) => action.categoryId !== category.id),
      };

    default:
      return;
  }
};
