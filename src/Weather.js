import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./formattedDate";
import "./App.css";
import SearchEngine from "./SearchEngine";

import background from "./images/pexels-artur-roman-539711.jpg";
import tomorrow from "./images/sunny.png";
import Mon from "./images/clouds.png";
import Tue from "./images/clouds_rain.png";
import Wed from "./images/sunny.png";
import Thu from "./images/sun_clouds.png";
import Fri from "./images/clouds.png";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setReady(true);
  }

  function search() {
    const apiKey = "98612a22cb9a3addb8d9134910c82826";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="wrapper">
          <div
            className="container"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="row">
              <div className="col-4">
                Data last updated:
                <h6>
                  <strong>
                    {" "}
                    <FormattedDate date={weatherData.date} />
                  </strong>{" "}
                </h6>
              </div>

              <div className="col-7">
                <form
                  className="input-group"
                  id="searchForm"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="search"
                    className="form-control rounded"
                    autoFocus="on"
                    placeholder="Type your city here"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    id="searchResult"
                    onChange={handleSearch}
                  />
                  <button
                    id="searchButton"
                    type="button"
                    className="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                  <button type="button" id="currentLocation">
                    <i class="fas fa-street-view" />
                  </button>
                </form>
              </div>
            </div>

            <div>
              <SearchEngine info={weatherData} />
            </div>
            <div className="forecast" id="forecast">
              <div className="row justify-content-center">
                <div className="col-2">
                  {" "}
                  <span>Mon</span>
                  <br />
                  12°
                  <img src={Mon} className="img-fluid" alt="" />
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
          </div>

          <small className="link">
            <a
              href="https://github.com/Sandra13041009/my-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Sandra Horn
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
