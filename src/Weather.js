import React from "react";
import './App.css';

import background from "./images/pexels-artur-roman-539711.jpg";
import tomorrow from "./images/sunny.png";
import Mon from "./images/clouds.png";
import Tue from "./images/clouds_rain.png";
import Wed from "./images/sunny.png";
import Thu from "./images/sun_clouds.png";
import Fri from "./images/clouds.png";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="wrapper">
        <div
          className="container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="row">
            <div className="col-4">
              Your local time:
              <h6 style={{ fontWeight: "bold" }}>Saturday, 10:31</h6>
            </div>

               <div className="col-7">
        <form className="input-group" id="searchForm">     
          <input type="search" className="form-control rounded" autofocus="on" placeholder="Type your city here" aria-label="Search" aria-describedby="search-addon" id="searchResult" />
                              <button id="searchButton" type="button" className="btn btn-primary">
                                  <i class="fas fa-search"></i></button>
                              <button type="button" id="currentLocation"><i class="fas fa-street-view"/>
                              </button>
        </form>
      </div>
     </div>

          <div className="row ">
            <div className="col-3">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Clear"
                className="IMG"
                id="icon"
              />
            </div>

            <div className="col-4  justify-content-center  align-items-center">
              <div className="temperature"></div>
              <strong>
                <p id="resultCity" />{" "}
                <span class="mainIcon">
                  <h3> Detroit </h3>{" "}
                </span>
              </strong>
              <strong>
                <span
                  id="resultTemperature"
                  style={{ fontSize: "30px", lineHeight: "3px" }}
                />{" "}
                12°
              </strong>
              <a href="/#" id="Fahrenheit" className="link">
                °F
              </a>
              |
              <a href="/#" id="Celsius" className="link">
                °C
              </a>
              <strong>
                <p id="description" style={{ textTransform: "capitalize" }}>partly cloudy</p>
              </strong>
              <p className="additionalInfo">
                Humidity <span id="humidity" /> 13 %
                <br />
                Wind <span id="wind" /> 5 km/h
              </p>
            </div>
        
                
            <div className="col-3">
              <div className="tomorrow" id="tomorrow">
                <strong>Tomorrow's Weather</strong>
                <br />
                <strong>
                  <span>18 </span>°
                </strong>
                <span> (11)</span>°
                <img src={tomorrow} className="imageTomorrow" alt="" />
              </div>
            </div>

            <div className="forecast" id="forecast">
              <div className="row justify-content-center">
                <div className="col-2">
                  {" "}
                  <span>Mon</span>
                  <br />
                  12°
                  <img src={Mon} class="img-fluid" alt="" />
                </div>
                <div className="col-2">
                  {" "}
                  <span>Tue</span>
                  <br />
                  18°
                  <img src={Tue} class="img-fluid" alt="" />
                </div>
                <div className="col-2">
                  {" "}
                  <span>Wed</span>
                  <br />
                  13°
                  <img src={Wed} class="img-fluid" alt="" />
                </div>
                <div className="col-2">
                  {" "}
                  <span>Thu</span>
                  <br />
                  10°
                  <img src={Thu} class="img-fluid" alt="" />
                </div>
                <div className="col-2">
                  {" "}
                  <span>Fri</span>
                  <br />
                  17°
                  <img src={Fri} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
        
          </div>
        </div>
        <small className="link">
          <a
            href="https://github.com/Sandra13041009/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >Open-source code </a>
          by Sandra Horn
        </small>
      </div>
    </div>
  );
}
