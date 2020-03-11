import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenuLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Upcoming movies</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
}
