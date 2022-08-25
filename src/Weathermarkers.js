import React from "react";
import "./Weathermarkers.css";
export default function Weathermarkers(props) {
  return (
    <div className="weathermarkers row">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-6 mt-2 ">
            <p>Wind</p>{" "}
            <div className="value" id="speed">
              {props.value.wind} km/h{" "}
            </div>{" "}
          </div>
          <div className="col-6 mt-2 ">
            <p id="pHum">Humidity</p>
            <div className="value" id="humidity">
              {props.value.humidity} %
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-6 mt-2 ">
            <p>Sunrise</p>
            <div className="value" id="sunrise">
              {props.value.sunset}
            </div>
          </div>
          <div className="col-6 mt-2 ">
            <p>Sunset</p>
            <div className="value" id="sunset">
              {props.value.sunset}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
