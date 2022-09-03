import "./App.css";
import axios from "axios";
//import Form from "./Form";
import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import Weekforecast from "./Weekforecast";
import WeatherForecast from "./WeatherForecast";
import React, { useState } from "react";

export default function App() {
  let defaultCity = "Paris";
  const [city, setCity] = useState(defaultCity);

  const [weatherDate, setWeatherDate] = useState({ ready: false });
  function ConvertTime(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);

    var hour = a.getHours();
    var min = a.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (min < 10) {
      min = `0${min}`;
    }

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
      sunrise: ConvertTime(Math.round(response.data.sys.sunrise)),
      sunset: ConvertTime(Math.round(response.data.sys.sunset)),
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
      ready: true,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    //let city = "London";
    const apiKey = "80c3fc3b3ba1b20439bcc8b51f4d10ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    console.log(city);
  }
  if (weatherDate.ready) {
    return (
      <div className="App">
        <br />
        <div className="content">
          <h1>Weather Forecast</h1>
          <div className="Form">
            <form onSubmit={handleSubmit} className="mt-3 mb-3" id="forminput">
              <div className="row">
                <div className="col-8 input-line">
                  <input
                    id="search"
                    className="search"
                    type="search"
                    placeholder="Search"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3 input-line">
                  <input type="submit" className="submit" value="   " />
                </div>
              </div>
            </form>
          </div>

          <Citydate value={weatherDate} />
          <Weathermarkers value={weatherDate} />
          <hr />
          <WeatherForecast coords={weatherDate.coord} />

          <Weekforecast />
        </div>
      </div>
    );
  } else {
    // let city = "London";
    /* const apiKey = "80c3fc3b3ba1b20439bcc8b51f4d10ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);*/
    search();
    return "Loading...";
  }
}
