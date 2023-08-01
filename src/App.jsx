import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepartmentPage from "./pages/DepartmentPage";
import Artwork from "./components/Artwork";

function App() {

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

  // prepare the links in the navbar
  const navlinks = departmentPage.map((item) => {
    const link = "/department-" + item.departmentId;
    return (
      <li key={item.departmentId}>
        <NavLink key={item.departmentId} exact to={link}>
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
        element={<DepartmentPage departmentId={item.departmentId} departmentName={item.displayName} />}
      ></Route>
    );
  });

  return (
    <div>
      <Header></Header>
      <Navbar links={navlinks}></Navbar>

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
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
