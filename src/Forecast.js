import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <Container
        className="fivedays-container"
        style={{ backgroundColor: "rgba(125, 125, 125, 0.2)" }}
      >
        <Row>
          <Col>
            <div className="days">{forecast[0].dt}</div>
            <div className="forecasticons">
              <ReactAnimatedWeather
                icon={forecast[0].weather[0].icon}
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {Math.round(forecast[0].temp.max)}°{" "}
              {Math.round(forecast[0].temp.min)}°
            </div>
          </Col>
          <Col>
            <div className="days">{forecast[1].dt}</div>
            <div className="forecasticons">
              <ReactAnimatedWeather
                icon="RAIN"
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {Math.round(forecast[1].temp.max)}°{" "}
              {Math.round(forecast[1].temp.min)}°
            </div>
          </Col>
          <Col>
            <div className="days">{forecast[2].dt}</div>
            <div className="forecasticons">
              <ReactAnimatedWeather
                icon="SLEET"
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {Math.round(forecast[2].temp.max)}°{" "}
              {Math.round(forecast[2].temp.min)}°
            </div>
          </Col>
          <Col>
            <div className="days">{forecast[3].dt}</div>
            <div className="forecasticons">
              <ReactAnimatedWeather
                icon="SNOW"
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {Math.round(forecast[3].temp.max)}°{" "}
              {Math.round(forecast[3].temp.min)}°
            </div>
          </Col>
          <Col>
            <div className="days">{forecast[4].dt}</div>
            <div className="forecasticons">
              <ReactAnimatedWeather
                icon="FOG"
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {Math.round(forecast[4].temp.max)}°{" "}
              {Math.round(forecast[4].temp.min)}°
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
