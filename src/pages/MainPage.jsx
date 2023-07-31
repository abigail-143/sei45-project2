import React, { useEffect, useState } from "react";
import Artwork from "../components/Artwork";

const MainPage = () => {
  const [testpage, setTestPage] = useState([]);

  const getObjects = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/objects?departmentIds=1"
    );
    const data = await res.json();
    const array = data.objectIDs;
    setTestPage(array);
  };

  useEffect(() => {
    getObjects();
  }, []);

  return (
    <div className="department-page">
      <h1>Main Page</h1>
      <div className="department-art-display">
        <Artwork></Artwork>
      </div>
      <div>{JSON.stringify(testpage)}</div>
    </div>
  );
};

export default MainPage;
