import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [toggle, setToggle] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setToggle((prevToggle) => prevToggle + 1);
    }, 1000);
  };
  const pause = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setToggle(0);
  };

  return (
    <div className="parent">
      <div className="box" onClick={start}>
        start
      </div>
      <div className="box" onClick={pause}>
        pause
      </div>
      <div className="box">{toggle}</div>
      <div className="box" onClick={reset}>
        reset
      </div>
    </div>
  );
}

export default App;
