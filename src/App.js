// import { Routes, Route } from "react-router-dom";
import Navbar from "./views/navbar/Navbar";
// import BlogPosts from "./views/blog/posts/BlogPosts";
// import CategoryMenu from "./views/left-side/category-menu/CategoryMenu";
// import CategoryForm from "./views/left-side/category-menu/CategoryForm";
import ViewsMain from "./views/ViewsMain";
function App() {
  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row no-gutters m-0">
        <div className="col-lg-12 p-0">
          <Navbar />
        </div>
      </div>
      <div className="row no-gutters m-0">
        <div className="col-lg-12 p-0">
          <ViewsMain />
        </div>
      </div>
    </div>
  );
}

export default App;
