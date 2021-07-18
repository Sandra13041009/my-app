import React, { useState } from "react";
import axios from "axios";

import Tue from "./images/clouds_rain.png";
import Wed from "./images/sunny.png";
import Thu from "./images/sun_clouds.png";
import Fri from "./images/clouds.png";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast" id="forecast">
        <div className="row justify-content-center">
          <div className="col-2">
            {" "}
            <span>Mon</span>
            <br />
            <span>{forecast[0].temp.max}°</span>
            <br />
            <span>{forecast[0].temp.min}° </span>
            <img
              src={forecast[0].weather[0].icon}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-2">
            {" "}
            <span>Tue</span>
            <br />
            18°
            <img src={Tue} className="img-fluid" alt="" />
          </div>
          <div className="col-2">
            {" "}
            <span>Wed</span>
            <br />
            13°
            <img src={Wed} className="img-fluid" alt="" />
          </div>
          <div className="col-2">
            {" "}
            <span>Thu</span>
            <br />
            10°
            <img src={Thu} className="img-fluid" alt="" />
          </div>
          <div className="col-2">
            {" "}
            <span>Fri</span>
            <br />
            17°
            <img src={Fri} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=98612a22cb9a3addb8d9134910c82826&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
