import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    
  return (
    <div>
      <h1>Navbar</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/main">
              Main Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
