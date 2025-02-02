import { createContext, useEffect, useReducer, useState } from "react";
import { blogPostReducer } from "./blogPostReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { BLOG_POSTS } from "routes/routes";
import { useNavigate } from "react-router-dom";

let initialState = {
  blog_posts: [],
  blog_post_categories: [],
};

export const blogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
  const [blogPostData, dispatch] = useReducer(blogPostReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPostData();
  }, []);

  //GET

  const getFilteredBlogPosts = () => {
    // return [];
    const posts = blogPostData.blog_posts;
    switch (blogPostData.selectedCategory) {
      case "all":
        return posts;
      case null:
        return posts.filter((post) => !post.blog_post_category_id);
      case Number.isInteger(posts):
        return posts.filter((post) => post.blog_post_category_id === blogPostData.selectedCategory);
      default:
        return posts;
    }
  };

  // DISPATCH

  const setSelectedCategory = (selectedCategory) => {
    dispatch({ type: "setSelectedCategory", selectedCategory });
    navigate(BLOG_POSTS);
  };
  const showUncategorized = () => {
    setSelectedCategory(null);
    navigate(BLOG_POSTS);
  };
  const showAll = () => {
    setSelectedCategory("all");
    navigate(BLOG_POSTS);
  };
  const addNewBlogPost = (blog_post) => {
    dispatch({ type: "addNewBlogPost", blog_post });
    navigate(BLOG_POSTS);
  };

  //FETCH

  const fetchBlogPostData = () => {
    const POST_URL = `${process.env.REACT_APP_BLOG_API}/blog-post`;
    setIsLoading(true);
    axios
      .get(POST_URL)
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          dispatch({
            type: "setBlogPostData",
            newBlogPostData: {
              blog_posts: res.data.blog_posts,
              blog_post_categories: res.data.blog_post_categories,
              // filtered_blog_posts: res.data.blog_posts,
            },
          });
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const createPost = (payload) => {
    const CREATE_POST_URL = `${process.env.REACT_APP_BLOG_API}/blog-post`;
    const postPayload = new FormData();
    postPayload.append("title", payload.title);
    if (payload.file) postPayload.append("file", payload.file);
    postPayload.append("text", payload.text);
    postPayload.append("blog_post_category_id", payload.blog_post_category_id);
    setIsLoading(true);
    const promise = new Promise((resolve, reject) =>
      axios
        .post(CREATE_POST_URL, postPayload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.result === "success") {
            addNewBlogPost(res.data.blog_post);
          }
          setIsLoading(false);
          resolve();
        })
        .catch(() => {
          setIsLoading(false);
          reject();
        })
    );
    toast.promise(promise, {
      pending: "Post is being created",
      success: "Post has been created 👌",
      error: "Error while creating the post 🤯",
    });
  };

  const createCategory = (categoryName) => {
    const CREATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    setIsLoading(true);
    const promise = new Promise((resolve, reject) =>
      axios
        .post(CREATE_CATEGORY_URL, { name: categoryName })
        .then((res) => {
          console.log(res.data);
          if (res.data.result === "success") {
            dispatch({ type: "createCategory", newCategory: res.data.blog_post_category });
          }
          setIsLoading(false);
          resolve();
        })
        .catch(() => {
          setIsLoading(false);
          reject();
        })
    );
    toast.promise(promise, {
      pending: "Category is being created",
      success: "Category has been created 👌",
      error: "Error while creating the category 🤯",
    });
  };

  const updateCategory = (categoryId, newName, setState) => {
    const UPDATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    setIsLoading(true);
    const promise = new Promise((resolve, reject) =>
      axios
        .put(UPDATE_CATEGORY_URL, { id: categoryId, name: newName })
        .then((res) => {
          console.log(res.data);
          if (res.data.result === "success") {
            dispatch({ type: "updateCategory", categoryId, newName });
            setState({ isEditingModeOn: false, newName });
          }
          setIsLoading(false);
          resolve();
        })
        .catch(() => {
          setIsLoading(false);
          reject();
        })
    );
    toast.promise(promise, {
      pending: "Category is being updated",
      success: "Category has been updated 👌",
      error: "Error while updating the category 🤯",
    });
  };

  const deleteCategory = (categoryId) => {
    const UPDATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    setIsLoading(true);
    const promise = new Promise((resolve, reject) =>
      axios
        .delete(UPDATE_CATEGORY_URL, { data: { id: categoryId } })
        .then((res) => {
          console.log(res.data);
          if (res.data.result === "success") {
            dispatch({ type: "deleteCategory", categoryId });
          }
          setIsLoading(false);
          resolve();
        })
        .catch(() => {
          setIsLoading(false);
          reject();
        })
    );
    toast.promise(promise, {
      pending: "Category is being deleted",
      success: "Category has been deleted 👌",
      error: "Error while deleting the category 🤯",
    });
  };

  return (
    <blogPostContext.Provider
      value={{
        blogPostData,
        isLoading,

        getFilteredBlogPosts,

        setSelectedCategory,
        showUncategorized,
        showAll,

        createPost,
        createCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </blogPostContext.Provider>
  );
};
