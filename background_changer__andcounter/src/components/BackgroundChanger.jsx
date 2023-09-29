import { useState } from "react";
import React from "react";

const BackgroundChanger = () => {
  const [state, setState] = useState("");

  function btn(e) {
    let bgColor = window.getComputedStyle(e.target).backgroundColor;
    const parent = () => {
      setState(bgColor);
    };
    parent();
  }

  return (
    <div className="parent" style={{ backgroundColor: state }}>
      <div className="box" onClick={btn}></div>
      <div className="box" onClick={btn}></div>
      <div className="box" onClick={btn}></div>
      <div className="box" onClick={btn}></div>
    </div>
  );
};

export default BackgroundChanger;
