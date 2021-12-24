export const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "setBlogPostData":
      return {
        ...action.newBlogPostData,
      };

    case "setSelectedCategory":
      return {
        ...state,
        selectedCategory: action.id,
        filtered_blog_posts: state.blog_posts.filter((post) => post.blog_post_category_id === action.id),
      };

    case "clearSelectedCategory":
      return {
        ...state,
        selectedCategory: null,
        filtered_blog_posts: [...state.blog_posts],
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
