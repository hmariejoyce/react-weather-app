import "./App.css";
import Weather from "./Weather.js";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather App</p>
        <Search />
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
