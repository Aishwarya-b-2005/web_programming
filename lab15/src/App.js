import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/ThemeContext.js";
import ThemedComponent from "./components/ThemeComponent.js";

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
