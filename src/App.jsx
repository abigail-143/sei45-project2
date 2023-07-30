import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// the react-route-dom is in the DevDependecies (package.json) do i need to move it up to dependencies?

import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {/* <Suspense>
        <Routes>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </Suspense> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

// Header />
// Navbar/>
// Suspense / Routes / Route > each link to a new page
// Footer/>
