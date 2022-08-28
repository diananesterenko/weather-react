import React, { useState } from "react";
export default function Weatherdegree(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenh(event) {
    event.preventDefault();
    setUnit("farenh");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="degrees">
        <h1 id="currentDegree">{props.celsius}</h1>
        <div className="CF">
          <p id="celcium on">°C</p>
          <p id="CFline">/</p>
          <a href="/" onClick={convertToFarenh} id="farenheit">
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let farenh = (props.celsius * 9) / 5 + 32;
    return (
      <div className="degrees">
        <h1 id="currentDegree">{Math.round(farenh)}</h1>
        <div className="CF">
          <a href="/" onClick={convertToCelsius} id="celcium">
            °C
          </a>
          <p id="CFline">/</p>
          <p id="farenheit on">°F</p>
        </div>
      </div>
    );
  }
}
