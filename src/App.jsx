import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DepartmentPage from "./pages/DepartmentPage";

function App() {
  const [departmentPage, setDepartmentPage] = useState([]);
  const [pageChange, setPageChange] = useState('')

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
        <NavLink className="navlink" key={item.departmentId} onClick={() => {setPageChange(item.departmentId)}} exact to={link}>
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

  // const [page, setPage] = useState([]);

  // // this will get a filtered array of objectIds that have isPublicDomain = true
  // const getObjects = async () => {
  //   const res = await fetch(
  //     import.meta.env.VITE_SERVER +
  //       "/objects?departmentIds=" +
  //       props.departmentId
  //   );
  //   const data = await res.json();
  //   const objectIDArray = data.objectIDs.slice(1000, 1030);
  //   const validData = await getObjectInfo(objectIDArray);
  //   const filteredValidData = validData.filter((item) => {
  //     return item != null;
  //   });
  //   setPage(filteredValidData);
  // };

  // // this will check the data in each objectId to check if their isPublicDomain = true, to be used in getObjects()
  // const getObjectInfo = async (array) => {
  //   const returnValue = array.map(async (item) => {
  //     const res = await fetch(import.meta.env.VITE_SERVER + "/objects/" + item);
  //     const data = await res.json();
  //     if (data.isPublicDomain) {
  //       return data.objectID;
  //     }
  //   });
  //   const payload = await Promise.all(returnValue);
  //   return payload;
  // };

  // useEffect(() => {
  //   getObjects();
  //   // console.log(props.departmentName);
  // }, [page]);

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
