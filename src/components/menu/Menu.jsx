import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  //{"menu " + (menuOpen && "active")}
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/works">Education</NavLink>
        </li>
        {/* <li>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li> */}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {/* <li>
          <NavLink to="/Extra">Extra</NavLink>
        </li> */}
      </ul>
    </div>
  );
}
