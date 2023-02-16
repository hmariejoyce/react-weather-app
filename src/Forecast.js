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
                icon="CLEAR_DAY"
                color="#1e1e1e"
                size={52}
                animate={true}
              />
            </div>
            <div>
              {forecast[0].temp.max}° {forecast[0].temp.min}°
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
              {forecast[1].temp.max}° {forecast[1].temp.min}°
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
              {forecast[2].temp.max}° {forecast[2].temp.min}°
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
              {forecast[3].temp.max}° {forecast[3].temp.min}°
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
              {forecast[4].temp.max}° {forecast[4].temp.min}°
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    let apiKey = "0705f31a8b7e6dd794815d8c30778db8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
