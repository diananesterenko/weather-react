import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.value.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.value.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.value.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">
        <p>{day()}</p>
      </div>
      <div className="weathericonweek">
        <WeatherIcon value={props.value.weather[0].icon} size={55} />
      </div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max ">{maxTemp()}</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
