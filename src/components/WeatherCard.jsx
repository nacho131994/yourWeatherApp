import React, { useState } from "react";
// STYLES
import "./Spinner.css";
import "./WeatherCard.css";
// COMPONENTS
import "./Spinner.jsx";
import Spinner from "./Spinner.jsx";
import ForecastSection from "./ForecastSection";
// IMAGES
import temp from "../images/celsius.png";
import maxtemp from "../images/maxtemp.png";
import mintemp from "../images/mintemp.png";
import hum from "../images/humedad.png";
import wind from "../images/viento.png";
import sensation from "../images/temperatura.png";
import climateLogo from "../images/meteorologia.png";

const WeatherCard = ({ showWeatherCard, loading, weather, forecast }) => {
  let backgroundClass = "background-class";
  let iconUrl = "";

  let forecastUrl0 = "";
  let forecastUrl1 = "";
  let forecastUrl2 = "";
  let forecastUrl3 = "";
  let forecastUrl4 = "";
  let forecastDate0 = "";
  let forecastDate1 = "";
  let forecastDate2 = "";
  let forecastDate3 = "";
  let forecastDate4 = "";

  if (loading) {
    return <Spinner />;
  }

  if (showWeatherCard && weather && forecast) {
    let url = "";

    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    forecastUrl0 = url + forecast.list[0].weather[0].icon + ".png";
    forecastUrl1 = url + forecast.list[1].weather[0].icon + ".png";
    forecastUrl2 = url + forecast.list[2].weather[0].icon + ".png";
    forecastUrl3 = url + forecast.list[3].weather[0].icon + ".png";
    forecastUrl4 = url + forecast.list[4].weather[0].icon + ".png";
    forecastDate0 = forecast.list[0].dt_txt.substring(11, 13);
    forecastDate1 = forecast.list[1].dt_txt.substring(11, 13);
    forecastDate2 = forecast.list[2].dt_txt.substring(11, 13);
    forecastDate3 = forecast.list[3].dt_txt.substring(11, 13);
    forecastDate4 = forecast.list[4].dt_txt.substring(11, 13);

    if (weather.weather[0].description.toLowerCase().includes("clear")) {
      backgroundClass = "clear-sky";
    } else if (
      weather.weather[0].description.toLowerCase().includes("few clouds")
    ) {
      backgroundClass = "few-clouds-sky";
    } else if (
      weather.weather[0].description.toLowerCase().includes("scattered clouds")
    ) {
      backgroundClass = "scattered-clouds-sky";
    } else if (
      weather.weather[0].description.toLowerCase().includes("overcast clouds")
    ) {
      backgroundClass = "overcast-clouds-sky";
    } else if (weather.weather[0].description.toLowerCase().includes("rain")) {
      backgroundClass = "rain-sky";
    } else if (
      weather.weather[0].description.toLowerCase().includes("broken clouds")
    ) {
      backgroundClass = "broken-clouds-sky";
    } else if (
      weather.weather[0].description.toLowerCase().includes("thunderstorm")
    ) {
      backgroundClass = "thunderstorm-sky";
    } else if (weather.weather[0].description.toLowerCase().includes("snow")) {
      backgroundClass = "snow-sky";
    } else if (weather.weather[0].description.toLowerCase().includes("mist")) {
      backgroundClass = "mist-sky";
    }
  }

  return (
    <>
      {showWeatherCard ? (
        <>
          <div className="weather-card-container">
            <div className="current-weather">
              <div className={`name-and-icon ${backgroundClass}`}>
                <h3
                  className={`${
                    weather.name.length > 15 ? "city-name-big" : "city-name"
                  }`}
                >
                  {weather.name}
                </h3>
                <p className="current-temperature">
                  <img src={temp} className="features-icons-current" />
                  {(weather.main.temp - 273.15).toFixed(0)}°C
                </p>

                <section className="date-and-description">
                  <p>{weather.weather[0].description}</p>
                </section>
              </div>

              <div className="wheather-parameters">
                <h3>
                  <img src={maxtemp} className="features-icons" />
                  <p className="feature-name">
                    Max Temperature:{" "}
                    <p className="feature-value">
                      {(weather.main.temp_max - 273.15).toFixed(1)}°C
                    </p>
                  </p>
                </h3>
                <h3>
                  <img src={mintemp} className="features-icons" />
                  <p className="feature-name">
                    {" "}
                    Min Temperature:{" "}
                    <p className="feature-value">
                      {(weather.main.temp_min - 273.15).toFixed(1)}
                      °C
                    </p>
                  </p>
                </h3>{" "}
                <h3>
                  <img src={sensation} className="features-icons" />
                  <p className="feature-name">
                    Apparent Temperature:
                    <p className="feature-value">
                      {(weather.main.feels_like - 273.15).toFixed(1)}°C
                    </p>
                  </p>
                </h3>
                <h3>
                  <img src={hum} className="features-icons" />
                  <p className="feature-name">
                    Humidity:{" "}
                    <p className="feature-value">
                      {" "}
                      {weather.main.humidity.toFixed(1)}%
                    </p>
                  </p>
                </h3>{" "}
                <h3>
                  <img src={wind} className="features-icons" />
                  <p className="feature-name">
                    Wind:{" "}
                    <p className="feature-value"> {weather.wind.speed}m/s</p>
                  </p>
                </h3>
              </div>
            </div>
            <hr />
            <ForecastSection
              forecast={forecast}
              showWeatherCard={showWeatherCard}
              weather={weather}
            />
          </div>
        </>
      ) : (
        <>
          <div className="no-data-container">
            <h1 className="no-data">Search for a valid city</h1>
          </div>
          <img src={climateLogo} className="app-logo" />
        </>
      )}
    </>
  );
};

export default WeatherCard;
