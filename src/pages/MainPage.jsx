import React, { useEffect, useState } from "react";
import Artwork from "../components/Artwork";

const MainPage = () => {
  // this works to get the array of unique objectIds from a specific department
  //   const [testpage, setTestPage] = useState([]);

  //   const getObjects = async () => {
  //     const res = await fetch(
  //       import.meta.env.VITE_SERVER + "/objects?departmentIds=1"
  //     );
  //     const data = await res.json();
  //     const array = data.objectIDs;
  //     setTestPage(array);
  //   };

  //   useEffect(() => {
  //     getObjects();
  //   }, []);
  //------------------------------------------//

    const testArray = [180, 183, 184, 185, 10];

  //   const [testObjectData, setTestObjectData] = useState([]);

  //   const getObjectDetails = async (objectId) => {
  //     const res = await fetch(
  //       import.meta.env.VITE_SERVER + "/objects/" + objectId
  //     );
  //     const data = await res.json();
  //     setTestObjectData(data);
  //   };

    for (let i = 0; i < testArray.length; i++) {
    const [testObjectData, setTestObjectData] = useState([]);

    const getObjectDetails = async (objectId) => {
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/objects/" + objectId
      );
      const data = await res.json();
      setTestObjectData(data);
    };
      const data = getObjectDetails(testArray[i]);
      if (data.isPublicDomain) {
        return data.primaryImage;
      }
    }

  return (
    <div className="department-page">
      <h1>Main Page</h1>
      <div className="department-art-display">
        <Artwork></Artwork>
      </div>
      {/* <div>{JSON.stringify(testpage)}</div> */}
      {/* <div>{JSON.stringify(testObjectData)}</div> */}
    </div>
  );
};

export default MainPage;
