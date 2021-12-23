import { Link } from "react-router-dom";
import { BLOG_POSTS } from "routes/routes";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* <span className="navbar-brand mb-0 h1">Navbar</span>*/}
        <Link to={BLOG_POSTS}>
          <img src="/assets/logo.png" alt=""/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
