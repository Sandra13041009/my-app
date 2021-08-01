import React from "react";
import Conversion from "./Conversion";
import WeatherIcon from "./WeatherIcon";
import Tomorrow from "./Tomorrow";

import "./App.css";

export default function SearchEngine(props) {
  return (
    <div className="row middle">
      <div className="col-3">
        <div className="IMG">
          <WeatherIcon code={props.info.icon} size={100} />
        </div>
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
        <Tomorrow />
        {/*Temperature for upcoming day goes here */}
      </div>
    </div>
  );
}
