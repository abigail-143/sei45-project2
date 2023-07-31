import React from "react";

const Artwork = () => {
  return (
    <div className="artwork">
      <div className="artwork-display">
        <img src="https://picsum.photos/200" alt="museum-photo"></img>
        <p>Artwork Name</p>
        <p>Artist Name</p>
      </div>
      <div className="artwork-information">
        <p>Artwork Name</p>
        <p>Artist Name</p>
        <p>Artist Bio</p>
        <p>Culture</p>
        <p>Creation Date</p>
      </div>
    </div>
  );
};

export default Artwork;
