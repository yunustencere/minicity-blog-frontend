import React from "react";
import LeftSide from "./left-side/LeftSide";
import RightSide from "./right-side/RightSide";

const ViewsMain = () => {
	return (
		<>
			<div className="row no-gutters m-0">
				<div className="col-lg-12">
					<div className="row no-gutters ">
						<div className="col-lg-3">
							<LeftSide />
						</div>
						<div className="col-lg-9">
							<RightSide />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewsMain;
