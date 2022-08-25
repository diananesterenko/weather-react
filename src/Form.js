/*import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.city);
  function search(){
     //let city = "London";
     const apiKey = "80c3fc3b3ba1b20439bcc8b51f4d10ed";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.prventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    console.log(city);
    
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit} className="mt-3 mb-3" id="forminput">
        <div className="row">
          <div className="col-7 input-line">
            <input
              id="search"
              className="search"
              type="search"
              placeholder="Search"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-5 input-line">
            <input type="submit" className="submit" value="   " />
            <input type="" className="submit" id="current" value="Current" />
          </div>
        </div>
      </form>
    </div>
  );
}*/
