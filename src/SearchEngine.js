import React from "react";
import Conversion from "./Conversion";
import "./App.css";

export default function SearchEngine(props) {
  return (
    <div className="row">
      <div className="col-3">
        <img src={props.info.iconUrl} alt="" className="IMG" />
      </div>

      <div className="col-4  justify-content-center  align-items-center">
        <div className="temperature">
          <p id="resultCity" className="mainIcon">
            {" "}
            <h3> {props.info.city} </h3>{" "}
          </p>
          <Conversion celsius={props.info.temperature} />

          <strong>
            <p id="description" style={{ textTransform: "capitalize" }}>
              {props.info.description}
            </p>
          </strong>
          <p className="additionalInfo">
            Humidity <span id="humidity" /> {props.info.humidity} %
            <br />
            Wind <span id="wind" /> {props.info.wind} km/h
          </p>
        </div>
      </div>

      <div className="col-3">
        <div className="tomorrow" id="tomorrow">
          <strong>Tomorrow's Weather</strong>
          <br />
          <strong>
            <span>18 </span>°
          </strong>
          <span> (11)</span>°<p>insert tomorrow</p>
        </div>
      </div>
    </div>
  );
}
// <img src={tomorrow} className="imageTomorrow" alt="" />
