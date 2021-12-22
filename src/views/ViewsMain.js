import LeftSide from "./left-side/LeftSide";
import Navbar from "./navbar/Navbar";
import RightSide from "./right-side/RightSide";

const ViewsMain = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-lg-12 p-0">
          <Navbar />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-12">
          <div className="row g-0">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewsMain;
