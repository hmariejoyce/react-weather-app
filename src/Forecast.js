import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

export default function Forecast() {
  return (
    <Container
      className="fivedays-container"
      style={{ backgroundColor: "rgba(125, 125, 125, 0.2)" }}
    >
      <Row>
        <Col>
          <div className="days">Fri</div>
          <div className="forecasticons">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#1e1e1e"
              size={52}
              animate={true}
            />
          </div>
          <div>42° 29°</div>
        </Col>
        <Col>
          <div className="days">Sat</div>
          <div className="forecasticons">
            <ReactAnimatedWeather
              icon="RAIN"
              color="#1e1e1e"
              size={52}
              animate={true}
            />
          </div>
          <div>36° 26°</div>
        </Col>
        <Col>
          <div className="days">Sun</div>
          <div className="forecasticons">
            <ReactAnimatedWeather
              icon="SLEET"
              color="#1e1e1e"
              size={52}
              animate={true}
            />
          </div>
          <div>50° 36°</div>
        </Col>
        <Col>
          <div className="days">Mon</div>
          <div className="forecasticons">
            <ReactAnimatedWeather
              icon="SNOW"
              color="#1e1e1e"
              size={52}
              animate={true}
            />
          </div>
          <div>50° 44°</div>
        </Col>
        <Col>
          <div className="days">Tue</div>
          <div className="forecasticons">
            <ReactAnimatedWeather
              icon="FOG"
              color="#1e1e1e"
              size={52}
              animate={true}
            />
          </div>
          <div>42° 29°</div>
        </Col>
      </Row>
    </Container>
  );
}
