import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="maintemp">{Math.round(props.celsius)}</span>{" "}
        <span className="tempFormat">
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="WeatherTemp">
        <span className="maintemp">{Math.round(fahrenheit)}</span>{" "}
        <span className="tempFormat">
          <span className="unit">
            °
            <a href="/" onClick={showCelsius}>
              C{" "}
            </a>{" "}
            | °F
          </span>
        </span>
      </div>
    );
  }
}
