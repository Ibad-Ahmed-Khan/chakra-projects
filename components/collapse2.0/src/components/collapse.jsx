import React from "react";
import { useState } from "react";
import "./collapse.css";

const Collapse = (props) => {
  const [isOpenOne, setIsOpenOne] = useState(false);

  const btn = () => {
    setIsOpenOne(!isOpenOne);
  };

  return (
    <div className="Collapse">
      <div className="card">
        <div className="flex-row">
          <h1>{props.title}</h1>
          <button onClick={btn} style={{ rotate: isOpenOne ? "180deg" : "" }}>
            ^
          </button>
        </div>
        <p style={{ height: isOpenOne ? "auto" : "0", overflow: "hidden" }}>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default Collapse;
