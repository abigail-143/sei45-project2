import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/departments");
    const data = await res.json();
    const array = data.departments;
    setDepartments(array);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  const departmentLinks = departments.map((item) => {
    const linkName = "/department-" + item.departmentId;
    return (
      <li>
        <NavLink exact to={linkName}>
          {item.displayName}
        </NavLink>
      </li>
    );
  });

  return (
    <div>
      <h1>Navbar</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact to="/main">
              Main Page
            </NavLink>
          </li>
          {departmentLinks}
        </ul>
      </nav>
      {/* <p>{JSON.stringify(departments)}</p> */}
    </div>
  );
};

export default Navbar;
