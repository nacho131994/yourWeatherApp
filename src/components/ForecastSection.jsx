import React from "react";
//STYLES
import "../components/ForecastSection.css";

const ForecastSection = ({ forecast, showWeatherCard, weather }) => {
  let url = "";
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
  if (showWeatherCard) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    forecastUrl0 = url + forecast.list[0].weather[0].icon + ".png";
    forecastUrl1 = url + forecast.list[1].weather[0].icon + ".png";
    forecastUrl2 = url + forecast.list[2].weather[0].icon + ".png";
    forecastUrl3 = url + forecast.list[3].weather[0].icon + ".png";
    forecastUrl4 = url + forecast.list[3].weather[0].icon + ".png";
    forecastDate0 = forecast.list[0].dt_txt.substring(11, 13);
    forecastDate1 = forecast.list[1].dt_txt.substring(11, 13);
    forecastDate2 = forecast.list[2].dt_txt.substring(11, 13);
    forecastDate3 = forecast.list[3].dt_txt.substring(11, 13);
    forecastDate4 = forecast.list[4].dt_txt.substring(11, 13);
  }
  return (
    <div className="forecast-section">
      <div className="forecast">
        <p>{forecastDate0}:00</p>
        <hr className="hr-forecast" />
        <section>
          <img src={forecastUrl0} alt="icon" className="forecast-icon" />
          <p>{(forecast.list[0].main.temp - 273.15).toFixed(0)}°C</p>
        </section>
      </div>
      <div className="forecast">
        <p>{forecastDate1}:00</p>
        <hr className="hr-forecast" />
        <section>
          <img src={forecastUrl1} alt="icon" className="forecast-icon" />
          <p> {(forecast.list[1].main.temp - 273.15).toFixed(0)}°C</p>
        </section>
      </div>
      <div className="forecast">
        <p>{forecastDate2}:00</p>
        <hr className="hr-forecast" />
        <section>
          <img src={forecastUrl2} alt="icon" className="forecast-icon" />
          <p>{(forecast.list[2].main.temp - 273.15).toFixed(0)}°C</p>
        </section>
      </div>
      <div className="forecast">
        <p>{forecastDate3}:00</p>
        <hr className="hr-forecast" />
        <section>
          <img src={forecastUrl3} alt="icon" className="forecast-icon" />
          <p>{(forecast.list[3].main.temp - 273.15).toFixed(0)}°C</p>
        </section>
      </div>
      <div className="forecast">
        <p>{forecastDate4}:00</p>
        <hr className="hr-forecast" />
        <section>
          <img src={forecastUrl4} alt="icon" className="forecast-icon" />
          <p>{(forecast.list[4].main.temp - 273.15).toFixed(0)}°C</p>
        </section>
      </div>
    </div>
  );
};

export default ForecastSection;
