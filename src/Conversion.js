import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <span id="resultTemperature"> {Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a
            href="/#"
            id="Celsius"
            className="link"
            onClick={convertToFahrenheit}
          >
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="resultTemperature"> {Math.round(Fahrenheit())}</span>
        <span className="units">
          <a href="/" id="Celsius" className="link" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
