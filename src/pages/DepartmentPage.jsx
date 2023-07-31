import React from "react";
import Artwork from "../components/Artwork";

const DepartmentPage = (props) => {
  return (
    <div className="department-page">
      <h1>{props.departmentName}</h1>
      <div className="department-art-display">
        <Artwork objectID="45734"></Artwork>
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
