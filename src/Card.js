import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  return (
    <div className="cardbox">
      <img src={props.imageUrl} alt="img" className="cardimg" />
      <div className="boxContent">
        <div className="locationbox">
          {" "}
          <i className="fa-solid fa-location-dot"></i>
          <span className="location">{props.location}</span>{" "}
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
          <span className="maps">view on Google Maps</span>
        </div>
        <h4 className="cardtitle">{props.title}</h4>
        <span className="Date">{props.startDate}</span>-
        <span className="Date">{props.endDate}</span>
        <p className="carddesc">{props.description}</p>
      </div>
    </div>
  );
}
