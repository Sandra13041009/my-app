import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row middle">
          <div className="col-3">
            <div className="tomorrow" id="tomorrow">
              <strong>Tomorrow's Weather</strong>
              <br />
              <DailyForecast data={forecast[1]} />
            </div>
          </div>
        </div>

        <div className="forecast justify-content-center" id="forecast">
          <div className="row justify-content-center">
            {forecast.map(function (dailyForecast, index) {
              if (index > 1) {
                return (
                  <div className="col-2" key={index}>
                    <DailyForecast data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=42d00e01a69ecac9854a504f03bffe12&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
