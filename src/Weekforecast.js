import React from "react";
import "./Weekforecast.css";
export default function Weekforecast(props) {
  return (
    <div>
      <div className="weektemp" id="forecast"></div>
      <a
        href="https://github.com/diananesterenko/weather-react"
        className="sourselink"
      >
        Open source link
      </a>
    </div>
  );
}
