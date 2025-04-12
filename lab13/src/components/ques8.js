function TemperatureConverter({ celsius, fahrenheit }) {
    const toFahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";
    const toCelsius = fahrenheit ? ((fahrenheit - 32) * 5) / 9 : "";
  
    return (
      <div>
        <h2>Temperature Converter</h2>
        {celsius !== undefined && <p>{celsius}°C = {toFahrenheit.toFixed(2)}°F</p>}
        {fahrenheit !== undefined && <p>{fahrenheit}°F = {toCelsius.toFixed(2)}°C</p>}
      </div>
    );
  }
  
  export default TemperatureConverter;

  App.js
  import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div>
      <TemperatureConverter celsius={23} />
      <TemperatureConverter fahrenheit={73} />
    </div>
  );
}

export default App;
