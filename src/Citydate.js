import React, { useState } from "react";
import "./Citydate.css";
import axios from "axios";
import Weathermarkers from "./Weathermarkers";
export default function Citydate(props) {
  const [weatherDate, setWeatherDate] = useState({ ready: false });
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);

    var hour = a.getHours();
    var min = a.getMinutes();

    var time = hour + ":" + min;

    return time;
  }
  function handleResponse(response) {
    console.log(response.data);
    setWeatherDate({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      max_temp: Math.round(response.data.main.temp_max),
      min_temp: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      sunrise: timeConverter(Math.round(response.data.sys.sunrise)),
      sunset: timeConverter(Math.round(response.data.sys.sunset)),
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="citydate">
        <div>
          <h2 id="city">{weatherDate.city}</h2>
        </div>
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
              <p className="currentweatherlabel">{weatherDate.description}</p>
            </div>
          </div>

          <div className="col-sm-6 weatherdate2colmn">
            <div className="row">
              <div className="degrees">
                <h1 id="currentDegree">{weatherDate.temp}</h1>
                <div className="CF">
                  <p id="celcium">°C</p>
                  <p id="CFline">/</p>
                  <p id="farenheit">°F</p>
                </div>
              </div>
              <p id="day">{}</p>
              <p id="time">{}</p>
            </div>

            <div className="lowhigh">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <span id="min_temp"> {weatherDate.min_temp}</span>
                  °<br />
                  <span>Low</span>
                </div>
                <div className="col-6">
                  {" "}
                  <span id="max_temp">{weatherDate.max_temp}</span> °<br />
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Weathermarkers value={weatherDate} />
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "80c3fc3b3ba1b20439bcc8b51f4d10ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
