import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepartmentPage from "./pages/DepartmentPage";

function App() {
  const test = "/department-1";
  const testName = "American Decorative Arts";
  const test2 = "/department-3";
  const testName2 = "Ancient Near Eastern Art";

  const [departmentPage, setDepartmentPage] = useState([]);

  const getDepartmentPage = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/departments");
    const data = await res.json();
    const array = data.departments;
    setDepartmentPage(array);
  };

  useEffect(() => {
    getDepartmentPage();
  }, []);

  const navlinks = departmentPage.map((item) => {
    const link = "/department-" + item.departmentId;
    return (
      <li key={item.departmentId}>
        <NavLink exact to={link}>
          {item.displayName}
        </NavLink>
      </li>
    );
  });

  const pages = departmentPage.map((item) => {
    const path = "/department-" + item.departmentID;
    return (
      <Route
        path={path}
        element={<DepartmentPage departmentName="hi" />}
      ></Route>
    );
  });

  return (
    <div>
      <Header></Header>
      <Navbar links={navlinks}></Navbar>

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        {/* <Route path={test} element={<DepartmentPage departmentName={testName}/>}></Route>
        <Route path={test2} element={<DepartmentPage departmentName={testName2}/>}></Route> */}
        {pages}
      </Routes>
      {/* <Artwork></Artwork> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

// Header />
// Navbar/>
// Suspense / Routes / Route > each link to a new page
// Footer/>
