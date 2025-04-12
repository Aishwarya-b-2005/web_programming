import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    textAlign: "center",
    minHeight: "100vh",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemedComponent;
