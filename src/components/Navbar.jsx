import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact to="/main">
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
