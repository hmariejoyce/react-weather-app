import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import ForecastDay from "./ForecastDay";

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
      <Container
        className="fivedays-container"
        style={{ backgroundColor: "rgba(125, 125, 125, 0.2)" }}
      >
        <Row>
          <Col>
            <ForecastDay data={forecast[1]} />
          </Col>
          <Col>
            <ForecastDay data={forecast[2]} />
          </Col>
          <Col>
            <ForecastDay data={forecast[3]} />
          </Col>
          <Col>
            <ForecastDay data={forecast[4]} />
          </Col>
          <Col>
            <ForecastDay data={forecast[5]} />
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
