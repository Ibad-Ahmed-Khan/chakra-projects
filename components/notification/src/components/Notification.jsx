import React, { useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const multiply = () => {
    setIsClicked(false);
  };

  const btn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="parent">
      <button onClick={btn}>click me</button>
      {isClicked && (
        <div
          className="notification"
          style={{
            width: "40rem",
          }}
        >
          <div className="block">
            <button onClick={multiply} className="multiply">
              ×
            </button>
          </div>
          <h1>warning!</h1>
          <p>Don't just look at me otherwise you will fall in love with me</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
