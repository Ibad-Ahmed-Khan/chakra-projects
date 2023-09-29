import React, { useState } from "react";
import "./index.css";
import { data } from "./components/data";

function App() {
  const [clicked, setclicked] = useState(false);

  const toggle = (index) => {
    if (clicked == index) {
      return setclicked(null);
    } else {
      setclicked(index);
    }
  };

  return (
    <div className="accordion__section">
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <div onClick={() => toggle(index)} key={index}>
                <h1>{item.question}</h1>
              </div>
              {clicked == index ? (
                <div>
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
