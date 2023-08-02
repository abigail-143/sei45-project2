import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar-div">
      {/* <h1>Navbar</h1> */}
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-link">
            <NavLink className="navlink" exact="true" to="/main">
              Main Page
            </NavLink>
          </li>
          {/* {departmentLinks} */}
          {props.links}
        </ul>
      </nav>
      {/* <p>{JSON.stringify(departments)}</p> */}
    </div>
  );
};

export default Navbar;
