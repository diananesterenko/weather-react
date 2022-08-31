import React from "react";
import "./Weekforecast.css";
export default function Weekforecast(props) {
  return (
    <div>
      <div className="weektemp" id="forecast"></div>
      This project was coded by Diana Nesterenko
      <a
        href="https://github.com/diananesterenko/weather-react"
        className="sourselink"
      >
        (open-sourced on Github)
      </a>
    </div>
  );
}
