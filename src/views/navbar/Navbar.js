import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* <span className="navbar-brand mb-0 h1">Navbar</span>*/}

        <a className="navbar-brand" href="/">
          <img src="/assets/logo.png" alt=""/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
