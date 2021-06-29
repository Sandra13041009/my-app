import React from "react";

import Mon from "./images/clouds.png";
import Tue from "./images/clouds_rain.png";
import Wed from "./images/sunny.png";
import Thu from "./images/sun_clouds.png";
import Fri from "./images/clouds.png";

export default function Forecast() {
  return (
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
  );
}
