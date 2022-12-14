import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ab870c447cb5a275e19922dc8f817c7f`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container"></div>
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.main != undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}

            <p>Windspeed</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
