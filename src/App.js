import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="Main-Text">React Weather App</h1>
          <br />
          <Weather defaultCity="Pretoria" />
        </div>
      </header>
    </div>
  );
}

export default App;
