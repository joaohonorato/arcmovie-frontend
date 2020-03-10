import React from "react";
import { Link } from "react-router-dom";
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
