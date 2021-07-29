import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}°`;
  }

  function minTemperature() {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <strong>
        <span>{day()}</span>
      </strong>
      <br />
      <strong>
        <span>{maxTemperature()}</span>
      </strong>
      (<span>{minTemperature()}</span>){/*icon goes here */}
      <div className="canvas">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
    </div>
  );
}
