import "./App.css";
//import axios from "axios";
import Form from "./Form";
import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import Weekforecast from "./Weekforecast";
//import React, { useState } from "react";

export default function App() {
  /*const [temp, setTemp] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemp(response.data.main.temp);
  }
  let city = "London";
  const apiKey = "80c3fc3b3ba1b20439bcc8b51f4d10ed";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);*/

  return (
    <div className="App container">
      <br />
      <div className="content">
        <h1>Weather Forecast</h1>
        <Form />
        <Citydate />

        <hr />
        <Weekforecast />
      </div>
    </div>
  );
}
