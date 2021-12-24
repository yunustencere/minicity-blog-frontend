import CategoryMenu from "./category-menu/CategoryMenu";
import "./LeftSide.scss";
const LeftSide = () => {
  return (
    <div className="col-lg-2 LeftSide">
      <div className="row g-0">
        <div className="col-lg-12">
          <CategoryMenu />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
