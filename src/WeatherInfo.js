import React from "react";
import Dates from "./Dates";
import WeatherIcons from "./WeatherIcons";
import "./WeatherInfo.css";

export default function WeatherContent(props) {
  return (
    <div className="WeatherContent">
      <div className="weatherData">
        <div>
          <div className="temperature-container d-flex justify-content-start">
            <WeatherIcons code={props.data.icon} size={50} />

            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <h1>{props.data.city}</h1>

        <div className="overcast">
          <ul>
            <li>
              <Dates date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
