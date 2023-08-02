import React, { useEffect, useState } from "react";
import Artwork from "../components/Artwork";

const DepartmentPage = (props) => {
  // this is to track the page changing
  const [page, setPage] = useState([]);
  // this is to track the new set of artwork to be displayed
  const [artwork, setArtwork] = useState([]);

  // this will get a filtered array of objectIds that have isPublicDomain = true
  const getObjects = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER +
        "/objects?departmentIds=" +
        props.departmentId
    );
    const data = await res.json();
    const objectIDArray = await data.objectIDs.slice(400, 450);
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

  // this is to make sure the array list gets updated when the page changes
  useEffect(() => {
    getObjects();
  }, [props.departmentId]);

  // this is to generate the artwork displays usingthe filtered array of objectIds
  const getArtwork = () => {
    const artworkList = page.map((item) => {
      return <Artwork objectID={item}></Artwork>;
    });

    setArtwork(artworkList);
  };

  // this is to make sure the artwork list gets updated when the page changes
  useEffect(() => {
    getArtwork();
  }, [page]);

  return (
    <div className="department-page">
      <div className="department-art-display">
        {/* <Artwork objectID="45734"></Artwork> */}
        {artwork}
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

// create another state here to trigger a re-render??? so that the images will load
