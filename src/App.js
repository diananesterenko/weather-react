import "./App.css";
/*import axios from "axios";*/
import Form from "./Form";
import Citydate from "./Citydate";
import Weathermarkers from "./Weathermarkers";
import Weekforecast from "./Weekforecast";
function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    day: "Tuesday ",
    time: "16:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    sunrise: "05:27",
    sunset: "21:34",
    low: 7,
    high: 22,
  };
  return (
    <div className="App container">
      <br />
      <div className="content">
        <h1>Weather Forecast</h1>
        <Form />
        <Citydate value={weatherData} />
        <Weathermarkers value={weatherData} />
        <hr />
        <Weekforecast />
      </div>
    </div>
  );
}

export default App;
