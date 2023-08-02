import React, { useEffect, useState, useRef } from "react";

const MainPage = () => {
  return (
    <div className="main-page text-center">
      <div className="write-up">
        <h1>The Metropolitan Museum of Art</h1>
        <p>
          The Metropolitan Museum of Art presents over 5,000 years of art from
          around the world for everyone to experience and enjoy.
        </p>
        <p>
          This is a digital gallery of a subset of the open source data made
          available through The Metropolitan Museum of Art Collection API.
        </p>
        <p>
          For more information on the API, visit{" "}
          <a href="https://metmuseum.github.io/">The Met's github</a>. For a
          visit to the museum, plan your visit with{" "}
          <a href="https://www.metmuseum.org/">them</a>.
        </p>
      </div>
    </div>
  );
};

export default MainPage;

// CUT THE LARGE ARRAY INTO SMALL ARRAYS return it as an object or arrays?
// on click take the next chunk and prepare the Artwork component?
