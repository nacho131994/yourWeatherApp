import "./App.css";
//COMPONENTS
import NavBar from "./components/NavBar";
import WeatherPanel from "./components/WeatherPanel";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
};

export default App;
