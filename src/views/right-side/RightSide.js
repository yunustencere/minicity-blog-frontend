import React from "react";
import BlogPosts from "../blog/posts/BlogPosts";
import "./RightSide.scss";
const RightSide = () => {
	return (
		<>
			<div className="row no-gutters RightSide">
				<div className="col-lg-12 bgColor h-100">
					<div className="row no-gutters justify-content-center px-5 my-5">
						<div className="col-lg-10 d-flex justify-content-end">
							<button className="btn bg-success font--prompt fs--09rem fsw--500 text-white">
								Yeni İçerik Ekle
							</button>
						</div>
					</div>
					<div className="row no-gutters">
						<div className="col-lg-12">
							<BlogPosts />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RightSide;
