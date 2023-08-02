import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepartmentPage from "./pages/DepartmentPage";

function App() {
  const [departmentPage, setDepartmentPage] = useState([]);
  const [pageChange, setPageChange] = useState("");

  const getDepartmentPage = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/departments");
    const data = await res.json();
    const array = data.departments;
    setDepartmentPage(array);
  };

  useEffect(() => {
    getDepartmentPage();
  }, []);

  // prepare the links in the navbar
  const navlinks = departmentPage.map((item) => {
    const link = "/department-" + item.departmentId;
    return (
      <li className="navbar-link" key={item.departmentId}>
        <NavLink
          className="navlink"
          key={item.departmentId}
          onClick={() => {
            setPageChange(item.displayName);
          }}
          exact
          to={link}
        >
          {item.displayName}
        </NavLink>
      </li>
    );
  });

  // prepare each department page
  const pages = departmentPage.map((item) => {
    const path = "/department-" + item.departmentId;
    return (
      <Route
        path={path}
        element={
          <DepartmentPage
            departmentId={item.departmentId}
            departmentName={item.displayName}
            departmentPage={departmentPage}
            pageChange={pageChange}
          />
        }
      ></Route>
    );
  });

  return (
    <div className="app">
      <Header pageChange={pageChange}></Header>
      <Navbar links={navlinks} setPageChange={setPageChange}></Navbar>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        {pages}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
