import React, { useState } from "react";
import "../components/Searchbar.css";

const SearchBar = ({ getLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    getLocation(city);

    // Limpia el input después de enviar el formulario
    setCity("");
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={onSubmit}>
        <div className="input-section">
          <input
            type="text"
            placeholder="Search a city"
            className="input-section-input"
            onChange={(e) => setCity(e.target.value)}
            value={city} // Asegura que el valor del input se mantenga sincronizado con el estado 'city'
          />
          <button className="input-section-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
