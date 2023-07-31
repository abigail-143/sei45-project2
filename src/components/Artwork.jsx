import React, { useEffect, useState } from "react";

const Artwork = () => {
  const [test, setTest] = useState([]);

  const getTestObject = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER + "/objects/" + "45734"); // the objectID should pass down as props, so can filter out the ones with isPublicDomain = true
    const data = await res.json()
    setTest(data)
  };

  useEffect(() => {
    getTestObject()
  }, [])

  return (
    <div className="artwork">
      <div className="artwork-display">
        <img className="artwork-display-img" src={test.primaryImageSmall} alt="museum-photo"></img>
        <p>{test.title}</p>
        <p>{test.artistDisplayName}</p>
      </div>
      <div className="artwork-information">
        <p>{test.title}</p>
        <p>{test.artistDisplayName}</p>
        <p>{test.artistDisplayBio}</p>
        <p>{test.culture}</p>
        <p>{test.period}</p>
      </div>
      <p>{JSON.stringify(test)}</p>
    </div>
  );
};

export default Artwork;

// "returns a bunch of information (below is just a subset that I think I will use.

//     ""objectID"" = unique INTEGAR identifying number of each artwork,
//     ""isPublicDomain"" = BOOLEAN, when ""true"" indicates an artwork in the Public Domain
//     ""primaryImage"" = STRING, the url to the image of the object
//     ""primaryImageSmall"" = STRING, the url to the lower-res primary image of the object
//     ""additionalImages"" = ARRAY of STRINGS, any additional images of the object
//     ""department"" = STRING, indicated the Met's curatorial department responsible for the artwork
//     ""objectName"" = STRING, describes the physical type of the object
//     ""title"" = STRING, name of the artwork
//     ""culture"" = STRING, information about the culture or people from which the object was created
//     ""period"" = STRING, time or time period when the object was created
//     ""artistDisplayName"" = STRING, artist name
//     ""artistDisplayBio"" = STRING, nationality + life dates or artist
//     ""medium"" = STRING, refers to the materials that were used to create the artwork
//     ""country"" = STRING, country where the artwork was created or found
//     ""classification"" = STRING, general term describing the artwork type
//     ""rightsAndReproduction"" = STRING, credit line for artworks still under copyright

//     for full list, see https://metmuseum.github.io/#object"

{
  /* <div className="artwork">
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
    </div> */
}
