import { BlogPostProvider } from "context/useBlogPostData";
import { ToastContainer } from "react-toastify";
import ViewsMain from "./views/ViewsMain";

const App = () => {
  return (
    <BlogPostProvider>
      <div className="container-fluid p-0 m-0">
        <div className="row g-0">
          <div className="col-lg-12 p-0">
            <ViewsMain />
          </div>
        </div>
      </div>
      <ToastContainer />
    </BlogPostProvider>
  );
};

export default App;
