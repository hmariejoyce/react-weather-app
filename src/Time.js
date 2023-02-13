import React from "react";
import "./Time.css";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours() % 12 || 12;
  let ampm = props.date.getHours() >= 12 ? "PM" : "AM";
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let minutes = String(props.date.getMinutes()).padStart(2, "0");

  return (
    <div className="dateFormat">
      Last updated: {day}, {month} {date} {hours}:{minutes}
      {ampm}
    </div>
  );
}
