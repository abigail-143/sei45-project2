import React, { useEffect, useState, useRef } from "react";
import Artwork from "../components/Artwork";

const MainPage = () => {
  // this works to get the array of TOTAL unique objectIds from a specific department
  const [testpage, setTestPage] = useState([]);
  const validArrayRef = useRef([]);

  const getObjects = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/objects?departmentIds=1"
    );
    const data = await res.json();
    const array = data.objectIDs.slice(100, 120);
    console.log(`array: ${array}`);
    console.log(array);

    // const validArray = [];
    //   array.forEach(async (array) => {
    //     const res = await fetch(
    //       import.meta.env.VITE_SERVER + "/objects/" + item
    //     );
    //     const data = await res.json();
    //     if (data.isPublicDomain) {
    //       // validArray.push(data.objectID);
    //       validArrayRef.current.push(data.objectID);
    //     }
    //   })

    const validArray = await getUrls(array);
    const filtered = validArray.filter((item) => {
      return item != null;
    });

    setTestPage(filtered);
    console.log(`testpage: ${testpage}`);
    // console.log(testpage);
  };

  const getUrls = async (array) => {
    // const newReturnValue = [];
    const returnValue = array.map(async (item) => {
      const res = await fetch(import.meta.env.VITE_SERVER + "/objects/" + item);
      const data = await res.json();
      if (data.isPublicDomain) {
        // validArray.push(data.objectID);
        return data.objectID;
      }
    });
    // returnValue.filter((element) => {
    //   return element != null;
    // });

    // const payload = await Promise.all(returnValue);
    // console.log(payload);

    const payload = await Promise.all(returnValue);
    console.log(payload);

    return payload;
  };

  useEffect(() => {
    getObjects();
  }, []);

  const artworkList = testpage.map((item) => {
    return <Artwork objectID={item}></Artwork>
  })

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
    <div className="department-page">
      <h1>Main Page</h1>
      {/* <div className="department-art-display">
        <Artwork></Artwork>
      </div> */}
      <div>{JSON.stringify(testpage)}</div>
      {/* <div>{JSON.stringify(testObjectData)}</div> */}
      {/* {testData} */}
      <div>{artworkList}</div>
    </div>
  );
};

export default MainPage;

// CUT THE LARGE ARRAY INTO SMALL ARRAYS return it as an object or arrays?
// on click take the next chunk and prepare the Artwork component?
