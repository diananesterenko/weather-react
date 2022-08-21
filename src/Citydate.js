import React from "react";

export default function Citydate(props) {
  return (
    <div className="citydate">
      <h2 id="city" />

      <div className="row ">
        <div className="col-sm-6 main-weather">
          <div className="row">
            <img
              id="main_icon"
              src=" https://s3.amazonaws.com/shecodesio-production/uploads/files/000/040/021/original/6.png?1657469878"
              alt="sun"
              className="currentweather pe-4"
            />
          </div>
          <div className="row">
            <p className="currentweatherlabel"></p>
          </div>
        </div>

        <div className="col-sm-6 weatherdate2colmn">
          <div className="row">
            <div className="degrees">
              <h1 id="currentDegree">{props.value.temperature}</h1>
              <div className="CF">
                <p id="celcium">°C</p>
                <p id="CFline">/</p>
                <p id="farenheit">°F</p>
              </div>
            </div>
            <p id="day">{props.value.day}</p>
            <p id="time">{props.value.time}</p>
          </div>

          <div className="lowhigh">
            <div className="row">
              <div className="col-6">
                {" "}
                <span id="min_temp"> {props.value.low}</span>
                °<br />
                <span>Low</span>
              </div>
              <div className="col-6">
                {" "}
                <span id="max_temp">{props.value.high}</span> °<br />
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
