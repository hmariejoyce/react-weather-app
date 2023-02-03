import "./App.css";
import Search from "./Search.js";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="weatherAppTitle">Weather App</h1>
        <Search />
        <h4
          className="searchMessage"
          style={{ backgroundColor: "rgba(125, 125, 125, 0.2)" }}
        >
          Search for the current weather by entering your city above or
          selecting "Current Location".
        </h4>
        <p className="sourceCode">
          <a
            href="https://github.com/hmariejoyce/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Hannah Marie Joyce
        </p>
      </header>
    </div>
  );
}

export default App;
