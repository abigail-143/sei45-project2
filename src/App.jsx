import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artwork from "./components/Artwork";
import AmericanDecorativeArts from "./pages/AmericanDecorativeArts";
import DepartmentPage from "./pages/DepartmentPage";



function App() {
  const test = "/department-1"
  const testName = "American Decorative Arts"
  const test2 = "/department-3"
  const testName2 = "Ancient Near Eastern Art"

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
        {/* <Route path="/department-1" element={<AmericanDecorativeArts />}></Route> */}
        <Route path={test} element={<DepartmentPage departmentName={testName}/>}></Route>
        <Route path={test2} element={<DepartmentPage departmentName={testName2}/>}></Route>
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
