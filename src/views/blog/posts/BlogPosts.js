import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import "./BlogPost.scss";

const BlogPosts = () => {
	return (
		<div className="row no-gutters justify-content-center">
			<div className="col-lg-10">
				<div className="row">
					<div className="col-md-4 px-5 justify-content-center">
						<SingleBlogPost />
					</div>
					<div className="col-md-4 px-5 justify-content-center">
						<SingleBlogPost />
					</div>
					<div className="col-md-4 px-5 justify-content-center">
						<SingleBlogPost />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPosts;
