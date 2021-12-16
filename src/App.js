import { Routes, Route } from "react-router-dom";
import Navbar from "./views/navbar/Navbar";
import BlogPosts from "./views/blog/posts/BlogPosts";
import CategoryMenu from "./views/blog/categories/CategoryMenu";
import CategoryForm from "./views/blog/categories/CategoryForm";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <CategoryMenu />
        </div>
        <div className="col-lg-9">
          <Routes>
            <Route path="/" element={<BlogPosts />} />
            <Route path="/category/create" element={<CategoryForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
