import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <img className="logo" src="../public/METlogo.png" alt="logo" />
      <h1>The MET Museum: <br/>A Digital Gallery</h1>
      <h2 className="header-dept-name">{props.pageChange}</h2>
    </div>
  );
};

export default Header;
