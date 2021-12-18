import React from "react";
import SingleCategory from "../blog/categories/SingleCategory";
import "./LeftSide.scss";
const LeftSide = () => {
	return (
		<>
			<div className="row no-gutters LeftSide">
				<div className="col-lg-12">
					<div className="row justify-content-center my-2 category-menu py-5">
						<div className="col-sm-12 p-0">
							<div className="row">
								<div className="col-lg-12">
									<h3 className="text-center font--prompt fs--18rem fsw--200">
										Categories
									</h3>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 ">
									<SingleCategory />
									<SingleCategory />
									<SingleCategory />
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-lg-10 justify-content-center text-center px-4 pt-4">
									<button className="btn btnKategori font--prompt fs--10rem fsw--300 text-dark">
										Kategori İşlemleri
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LeftSide;
