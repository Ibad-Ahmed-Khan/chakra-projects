import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  const select = (e) => {
    setMood(e.target.value);
  };

  return (
    <div className="App">
      <div className="mood-tracker">
        <h1>Mood Tracker</h1>
        <select onChange={select}>
          <option value={"Neurtal"}>Neurtal</option>
          <option value={"Happy"}>Happy</option>
          <option value={"Sad"}>Sad</option>
          <option value={"Romantic"}>Romantic</option>
          <option value={"Excited"}>Excited</option>
        </select>
        <li>your mood is {mood}</li>
      </div>
    </div>
  );
}

export default App;
