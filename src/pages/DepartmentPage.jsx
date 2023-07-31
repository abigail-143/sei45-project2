import React from 'react';
import Artwork from '../components/Artwork';

const DepartmentPage = (props) => {
    return (
        <div>
            <h1>{props.departmentName}</h1>
            {/* <Artwork></Artwork> */}
        </div>
    );
};

export default DepartmentPage;