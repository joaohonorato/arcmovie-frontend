import React from "react";
import { Link } from "react-router-dom";
import NavMenuLinks from "./NavMenuLinks";

const Navbar = () => {
  return (
    <nav class="nav-wrapper grey darken-3">
      <div class="container">
        <Link to="/" className="brand-logo">
          ArcMovie
        </Link>
        <NavMenuLinks />
      </div>
    </nav>
  );
};

export default Navbar;
