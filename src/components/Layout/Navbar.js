import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import NavMenuLinks from "./NavMenuLinks";

export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ArcMovie
        </Link>
        <NavMenuLinks />
      </div>
    </nav>
  );
}
