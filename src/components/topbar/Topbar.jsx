import "./topbar.scss";
import React from "react";

 import {NavLink} from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">   
            <NavLink to="/" className="logo">Aishwarya Shelke</NavLink>
                     {/* <div className="itemContainer">
          </div> */}
        </div>
    <div className="right">
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
                  <NavLink to="/Experience">Experience</NavLink>
                </li> */}
                {/* <li>
                  <NavLink to="/testimonials">Testimonials</NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
    </ul>
    </div>
      </div>
    </div>
  );
}
