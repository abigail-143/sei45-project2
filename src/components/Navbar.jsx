import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-link">
            <NavLink onClick={() =>{props.setPageChange("")}} className="navlink" exact="true" to="/main">
              Main Page
            </NavLink>
          </li>
          {props.links}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
