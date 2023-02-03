import React, { useState } from "react";
import axios from "axios";

import "./SearchStyle.css";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0705f31a8b7e6dd794815d8c30778db8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <button type="submit" className="currentlocation">
        Current Location
      </button>
      <input
        type="search"
        placeholder="Type the city..."
        onChange={searchCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <div className="weatherDetails">
          <li>Temperature: {temperature}°C</li>
          <li style={{ textTransform: "capitalize" }}>
            Description: {description}
          </li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} Meters/Sec</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </div>
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
