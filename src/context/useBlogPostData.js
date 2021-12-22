import { createContext, useEffect, useReducer } from "react";
import { blogPostReducer } from "./blogPostReducer";
import axios from "axios";

let initialState = {
  blog_posts: [],
  blog_post_categories: [],
};

export const blogPostContext = createContext();

export const BlogPostProvider = ({ children }) => {
  const [blogPostData, dispatch] = useReducer(blogPostReducer, initialState);

  useEffect(() => {
    fetchBlogPostData();
  }, []);

  // DISPATCH

  const clearInputs = () => {
    dispatch({ type: "clearInputs", initialState });
  };

  //AXIOS

  const fetchBlogPostData = () => {
    const POST_URL = `${process.env.REACT_APP_BLOG_API}/blog-post`;
    axios
      .get(POST_URL)
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          dispatch({
            type: "setBlogPostData",
            newBlogPostData: { blog_posts: res.data.blog_posts, blog_post_categories: res.data.blog_post_categories },
          });
          // clearInputs();
        }
        // showLoading(false);
      })
      .catch(() => {
        // showLoading(false);
      });
  };

  const createPost = (payload) => {
    const CREATE_POST_URL = `${process.env.REACT_APP_BLOG_API}/blog-post`;
    const postPayload = new FormData();
    postPayload.append("title", payload.title);
    postPayload.append("file", payload.file);
    postPayload.append("text", payload.text);
    postPayload.append("blog_post_category_id", payload.blog_post_category_id);
    // showLoading(true);
    axios
      .post(CREATE_POST_URL, postPayload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          // changeStreams({ streamData: res.data.streams });
          // clearInputs();
        }
        // showLoading(false);
      })
      .catch(() => {
        // toastError("Hata", err.response.data.message);
        // dispatchModal({
        //   type: "changeModal",
        //   newModal: {
        //     alertModal: {
        //       type: 4,
        //       text: err.response.data.message,
        //     },
        //   },
        // });
        // showLoading(false);
      });
  };

  const createCategory = (categoryName) => {
    const CREATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    axios
      .post(CREATE_CATEGORY_URL, { name: categoryName })
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          dispatch({ type: "createCategory", newCategory: res.data.blog_post_category });
        }
        // showLoading(false);
      })
      .catch(() => {
        // showLoading(false);
      });
  };

  const updateCategory = (categoryId, newName, setState) => {
    const UPDATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    axios
      .put(UPDATE_CATEGORY_URL, { id: categoryId, name: newName })
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          dispatch({ type: "updateCategory", categoryId, newName });
          setState({ isEditingModeOn: false, name: newName });
        }
        // showLoading(false);
      })
      .catch(() => {
        // showLoading(false);
      });
  };

  const deleteCategory = (categoryId) => {
    const UPDATE_CATEGORY_URL = `${process.env.REACT_APP_BLOG_API}/blog-post-category`;
    axios
      .delete(UPDATE_CATEGORY_URL, { data: { id: categoryId } })
      .then((res) => {
        console.log(res.data);
        if (res.data.result === "success") {
          dispatch({ type: "deleteCategory", categoryId });
        }
        // showLoading(false);
      })
      .catch(() => {
        // showLoading(false);
      });
  };

  return (
    <blogPostContext.Provider
      value={{
        blogPostData,
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
