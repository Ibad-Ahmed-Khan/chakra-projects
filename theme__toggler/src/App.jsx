import React, { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light"); // default to light theme

  const getThemeStyles = () => {
    switch (theme) {
      case "light":
        return {
          backgroundColor: "#f5f5f5",
          color: "#333",
        };
      case "dark":
        return {
          backgroundColor: "#333",
          color: "#f5f5f5",
        };
      case "blue":
        return {
          backgroundColor: "#007BFF",
          color: "#f5f5f5",
        };
      case "red":
        return {
          backgroundColor: "red",
          color: "#f5f5f5",
        };
    }
  };

  return (
    <div className="App" style={getThemeStyles()}>
      <h1>Welcome to Multi-Theme App</h1>

      <label htmlFor="theme-selector">Choose a theme:</label>
      <select
        id="theme-selector"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
        <option value="red">red</option>
        {/* add other themes as needed */}
      </select>

      <p>This is a sample text for the theme!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi illo
        consectetur rem veritatis enim, nulla provident. Nobis, libero iusto
        numquam rem debitis odit sint voluptates aut! Accusantium, illum
        recusandae quaerat eius totam incidunt! Magni impedit cupiditate eos!
        Blanditiis natus ipsam laboriosam inventore debitis qui aut similique
        eveniet fugit voluptas.
      </p>
    </div>
  );
}

export default App;
