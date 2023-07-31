import React from 'react';
import Artwork from '../components/Artwork';

const DepartmentPage = (props) => {
    return (
        <div>
            <h1>{props.departmentName}</h1>
            <Artwork></Artwork>
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