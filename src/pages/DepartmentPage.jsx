import React, { useEffect, useState } from "react";
import Artwork from "../components/Artwork";

const DepartmentPage = (props) => {
  const [page, setPage] = useState([]);

  // this will get a filtered array of objectIds that have isPublicDomain = true
  const getObjects = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER +
        "/objects?departmentIds=" +
        props.departmentId
    );
    const data = await res.json();
    const objectIDArray = data.objectIDs.slice(100, 130);
    const validData = await getObjectInfo(objectIDArray);
    const filteredValidData = validData.filter((item) => {
      return item != null;
    });
    setPage(filteredValidData);
  };

  // this will check the data in each objectId to check if their isPublicDomain = true, to be used in getObjects()
  const getObjectInfo = async (array) => {
    const returnValue = array.map(async (item) => {
      const res = await fetch(import.meta.env.VITE_SERVER + "/objects/" + item);
      const data = await res.json();
      if (data.isPublicDomain) {
        return data.objectID;
      }
    });
    const payload = await Promise.all(returnValue);
    return payload;
  };

  useEffect(() => {
    getObjects();
  }, []);

  // this is to generate the artwork displays usingthe filtered array of objectIds
  const artworkList = page.map((item) => {
    return <Artwork objectID={item}></Artwork>;
  });

  return (
    <div className="department-page">
      <h1>{props.departmentName}</h1>
      <div className="department-art-display">
        <Artwork objectID="45734"></Artwork>
        {/* <Artwork objectID="180"></Artwork>
        <Artwork objectID="184"></Artwork> */}
        {artworkList}
      </div>
    </div>
  );
};

export default DepartmentPage;

// there's a prop of the departmentId, just prop.departmentId to get the number

// "/objects/departmentId" will give an object/dictionary of the objectId in the department

// {
// ""total"": interger,
// ""objectIDs"": [int, int, int…]
// }"

// get the objectIds from each department first then pull the objectId and display the Artwork

// CUT THE LARGE ARRAY INTO SMALL ARRAYS return it as an object or arrays?
// on click take the next chunk and prepare the Artwork component?
