import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Forecast.css";

export default function Forecast() {
  return (
    <Container>
      <Row>
        <Col>
          <div>Fri</div>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="rain"
            ></img>
          </div>
          <div>42° 29°</div>
        </Col>
        <Col>
          <div>Sat</div>
          <div>
            <img
              src="http://openweathermap.org/img/wn/01d.png"
              alt="clear sky"
            ></img>
          </div>
          <div>36° 26°</div>
        </Col>
        <Col>
          <div>Sun</div>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="rain"
            ></img>
          </div>
          <div>50° 36°</div>
        </Col>
        <Col>
          <div>Mon</div>
          <div>
            <img
              src="http://openweathermap.org/img/wn/10d.png"
              alt="rain"
            ></img>
          </div>
          <div>50° 44°</div>
        </Col>
        <Col>
          <div>Tue</div>
          <div>
            <img
              src="http://openweathermap.org/img/wn/04d.png"
              alt="broken clouds"
            ></img>
          </div>
          <div>42° 29°</div>
        </Col>
      </Row>
    </Container>
  );
}
