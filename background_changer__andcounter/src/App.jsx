import React, { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(Array(4).fill(0));

  const btn = (clickedIndex) => {
    const newCounter = counter.map((prevItem, currentIndex) => {
      if (clickedIndex === currentIndex) {
        return prevItem + 1;
      }
      return prevItem;
    });
    setCounter(newCounter);
  };

  return (
    <div className="parent">
      {counter.map((item, clickedIndex) => {
        return <button onClick={() => btn(clickedIndex)}>{item}</button>;
      })}
    </div>
  );
}

export default App;
