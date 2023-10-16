import React, { useState } from "react";
//STYLES
import "../components/WeatherPanel.css";

//COMPONENTS
import "../components/SearchBar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import WeatherCard from "./WeatherCard";

const WeatherPanel = () => {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=ec8c245206f56ef45b40fdfec8bfba9f&lang=en";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=ec8c245206f56ef45b40fdfec8bfba9f&lang=en";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (location) => {
    setLoading(true);
    setLocation(location);
    //weather
    urlWeather = urlWeather + cityUrl + location;

    await fetch(urlWeather)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setShowWeatherCard(false);
      });

    //forecast
    urlForecast = urlForecast + cityUrl + location;

    await fetch(urlForecast)
      .then((res) => {
        if (!res.ok) throw { res };
        return res.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);
        setLoading(false);
        setShowWeatherCard(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setShowWeatherCard(false);
      });
  };

  return (
    <React.Fragment>
      <SearchBar getLocation={getLocation} />
      <WeatherCard
        showWeatherCard={showWeatherCard}
        loading={loading}
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
};

export default WeatherPanel;
