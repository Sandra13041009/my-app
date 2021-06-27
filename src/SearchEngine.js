import React from "react";
import "./App.css";

export default function SearchEngine(props) {
  return (
    <div className="row">
      <div className="col-3">
        <img src={props.info.iconUrl} alt="" className="IMG" />
      </div>

      <div className="col-4  justify-content-center  align-items-center">
        <div className="temperature">
          <p id="resultCity" class="mainIcon">
            {" "}
            <h3> {props.info.city} </h3>{" "}
          </p>

          <span id="resultTemperature">
            {" "}
            {Math.round(props.info.temperature)}
          </span>

          <span className="units">
            <a href="/#" id="Fahrenheit" className="link">
              °C
            </a>
            |
            <a href="/#" id="Celsius" className="link">
              °F
            </a>
          </span>
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
