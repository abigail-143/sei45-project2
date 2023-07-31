import React, { useEffect, useState } from "react";

const Overlay = (props) => {
  return (
    <div className="overlay-background">
      <div className="overlay-details">
        <div className="img-column">
          <img className="overlay-img" src={props.img}></img>
        </div>
        <div className="detail-column">
          <h1>Artwork: {props.title}</h1>
          <h2>Artist Name: {props.artistDisplayName}</h2>
          <h3>Artist Bio: {props.artistDisplayBio}</h3>
          <p>{props.objectDate}</p>
          <p>{props.classification}</p>
          <p>{props.medium}</p>
          <button
            onClick={() => {
              props.setShow(false);
            }}
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
};

const Artwork = () => {
  // this state will take the data from each objectId api to populate artwork
  const [display, setDisplay] = useState([]);
  // this will toggle the overlay which will present more information
  const [show, setShow] = useState(false);

  // this function will grab the objectId API and return the relevant details
  const getDisplayObject = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + "/objects/" + "45734"
    ); // the objectID should pass down as props, so can filter out the ones with isPublicDomain = true
    const data = await res.json();
    setDisplay(data);
  };

  useEffect(() => {
    getDisplayObject();
  }, []);

  return (
    <>
      {show && (
        <Overlay
          setShow={setShow}
          title={display.title}
          artistDisplayName={display.artistDisplayName}
          artistDisplayBio={display.artistDisplayBio}
          culture={display.culture}
          img={display.primaryImage}
          objectDate={display.objectDate}
          classification={display.classification}
          medium={display.medium}
        ></Overlay>
      )}
      <div className="artwork">
        <div className="artwork-display">
          <img
            className="artwork-display-img"
            src={display.primaryImageSmall}
            alt="museum-photo"
          ></img>
          <p>{display.title}</p>
          <p>{display.artistDisplayName}</p>
        </div>
        <div
          className="artwork-information"
          onClick={() => {
            setShow(true);
          }}
        >
          <p>{display.title}</p>
          <p>{display.artistDisplayName}</p>
          <p>{display.artistDisplayBio}</p>
          <p>{display.culture}</p>
          <p>{display.period}</p>
        </div>
        {/* <p>{JSON.stringify(display)}</p> */}
      </div>
    </>
  );
};

export default Artwork;

// build the overlay here

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
