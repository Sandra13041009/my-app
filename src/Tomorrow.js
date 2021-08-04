import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";

export default function Tomorrow(props) {
  let [loaded, setLoaded] = useState(false);
  let [tomorrowForecast, setTomorrowForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setTomorrowForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="tomorrow" id="tomorrow">
          <strong>Tomorrow's Weather</strong>
          <br />
          {tomorrowForecast.map(function (dailyForecast, index) {
            if (index === 1) {
              return (
                <div className="nextDay" key={index}>
                  <DailyForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
