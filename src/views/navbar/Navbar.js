import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        {/* <span class="navbar-brand mb-0 h1">Navbar</span>*/}

        <a class="navbar-brand" href="/">
          <img src="/assets/logo.png" alt=""/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
