import React, { useEffect, useState, useRef } from "react";
import Artwork from "../components/Artwork";

const MainPage = () => {
  //------------------------------------------//

  // const [testData, setTestData] = useState([])

  // useEffect(() => {
  //   setTestData([180, 181, 182, 183, 184, 185])
  // }, [])

  //   const testLong = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const slicedLong = [];

  //   const getTestObjects = () => {
  //     const testChunkSize = 10;
  //     for (let i = 0; i < testLong.length; i + testChunkSize) {
  //       let testChunk = testLong.slice(i, i + testChunkSize);
  //       slicedLong.push(testChunk);
  //     }
  //     console.log(slicedLong);
  //     setTestPage(slicedLong);
  //   };

  //   useEffect(() => {
  //     getTestObjects();
  //   }, []);

  //------------------------------------------//

  //   const testArray = [180, 183, 184, 185, 10];

  //   const [testObjectData, setTestObjectData] = useState([]);

  //   const getObjectDetails = async (objectId) => {
  //     const res = await fetch(
  //       import.meta.env.VITE_SERVER + "/objects/" + objectId
  //     );
  //     const data = await res.json();
  //     setTestObjectData(data);
  //   };

  //   const [testObjectData, setTestObjectData] = useState([]);
  //   for (let i = 0; i < testArray.length; i++) {
  //     const getObjectDetails = async () => {
  //       let image = "";
  //       const res = await fetch(
  //         import.meta.env.VITE_SERVER + "/objects/" + testArray[i]
  //       );
  //       const data = await res.json();
  //       if (data.isPublicDomain) {
  //         console.log(i);
  //         image = data.primaryImage;
  //         console.log(image);
  //         console.log(data.objectID);
  //         return image;
  //       }
  //       setTestObjectData(image);
  //     };

  //     useEffect(() => {
  //       getObjectDetails();
  //     }, []);
  //   }

  return (
    <div className="department-page text-center">
      <h1>Main Page</h1>
    </div>
  );
};

export default MainPage;

// CUT THE LARGE ARRAY INTO SMALL ARRAYS return it as an object or arrays?
// on click take the next chunk and prepare the Artwork component?
