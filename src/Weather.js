import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Time from "./Time";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="MainWeather">
        <Container
          className="container"
          style={{ backgroundColor: "rgba(125, 125, 125, 0.2)" }}
        >
          <Time className="time" date={props.data.date} />
          <Row>
            <Col sm="6">
              <li className="city">{props.data.city}</li>
              <li>
                <img src={props.data.icon} alt={props.data.description} />
              </li>
              <li>
                <span className="maintemp">{props.data.temperature}</span>{" "}
                <span className="tempFormat">
                  <span className="celsius">°C </span>|{" "}
                  <span className="fahrenheit">°F</span>
                </span>
              </li>
              <li
                className="description"
                style={{ textTransform: "capitalize" }}
              >
                {props.data.description}
              </li>
            </Col>
            <Col sm="6" className="addfeatures">
              <li className="feature">Humidity: {props.data.humidity}%</li>
              <li className="feature">Wind: {props.data.wind} Meters/Sec</li>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
