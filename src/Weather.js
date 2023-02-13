import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Time from "./Time";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Weather.css";
import WeatherIcon from "./Weathericons";
import WeatherConversion from "./WeatherConversion";

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
                <WeatherIcon code={props.data.icon} size={52} />
              </li>
              <li>
                <WeatherConversion celsius={props.data.temperature} />
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
              <li className="feature">
                Wind: {Math.round(props.data.wind)} Meters/Sec
              </li>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
