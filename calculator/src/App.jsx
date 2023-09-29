import "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleValue = (input) => {
    console.log({ input });
    const data = `${value}${input}`;
    setValue(data);
  };

  const allclear = () => setValue("");

  const dlt = () => setValue((prevValue) => prevValue.slice(0, -1));

  const dot = () => {
    if (value.includes(".")) {
    } else {
      setValue((prevValue) => prevValue + ".");
    }
  };

  const equal = () => {
    if (value.includes("+")) {
      const number = value.split("+");
      const data = +number[0] + +number[1];
      setValue(data);
    }
    if (value.includes("-")) {
      const number = value.split("-");
      const data = +number[0] - +number[1];
      setValue(data);
    }

    if (value.includes("÷")) {
      const number = value.split("÷");
      const data = +number[0] / +number[1];
      setValue(data);
    }

    if (value.includes("×")) {
      const number = value.split("×");
      const data = +number[0] * +number[1];
      setValue(data);
    }
  };

  return (
    <div className="calc">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand">{value}</div>
      </div>
      <div className="buttons">
        <button className="span-two" onClick={allclear}>
          ac
        </button>
        <button onClick={dlt}>del</button>
        <button onClick={() => handleValue("÷")}>÷</button>
        <button onClick={() => handleValue(1)}>1</button>
        <button onClick={() => handleValue(2)}>2</button>
        <button onClick={() => handleValue(3)}>3</button>
        <button onClick={() => handleValue("×")}>×</button>
        <button onClick={() => handleValue(4)}>4</button>
        <button onClick={() => handleValue(5)}>5</button>
        <button onClick={() => handleValue(6)}>6</button>
        <button onClick={() => handleValue("+")}>+</button>
        <button onClick={() => handleValue(7)}>7</button>
        <button onClick={() => handleValue(8)}>8</button>
        <button onClick={() => handleValue(9)}>9</button>
        <button onClick={() => handleValue("-")}>-</button>
        <button onClick={() => dot(".")}>.</button>
        <button onClick={() => handleValue(0)}>0</button>
        <button className="span-two" onClick={() => equal("=")}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
