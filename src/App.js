import { Routes, Route } from "react-router-dom";
import Navbar from "./views/navbar/Navbar";
import BlogPosts from "./views/blog/posts/BlogPosts";
import CategoryMenu from "./views/blog/categories/CategoryMenu";
import CategoryForm from "./views/blog/categories/CategoryForm";
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
					<Routes>
						<Route path="/" element={<BlogPosts />} />
						<Route path="/category/create" element={<CategoryForm />} />
						<Route path="/views/views-main" element={<ViewsMain />} />
					</Routes>
				</div>
			</div>

			{/* <div className="row no-gutters m-0">
				<div className="col-lg-3">
					<CategoryMenu />
				</div>
				<div className="col-lg-9"></div>
			</div> */}
		</div>
	);
}

export default App;
