import React, { useState } from "react";
import "./Hamburger.css";

export const Hamburger = ({ onToggle }) => {
  const [hamBurgerClicked, setHamBurgerClicked] = useState(false);

  const handleClick = () => {
    setHamBurgerClicked(!hamBurgerClicked);
    onToggle();
  };

  return (
    <div onClick={handleClick} className="hamburger-parent">
      <span
        style={{
          transform: hamBurgerClicked
            ? "rotate(-45deg) translateY(5px)"
            : "none",
        }}
      ></span>
      <span
        style={{
          opacity: hamBurgerClicked ? "0" : "1",
          transition: "opacity 0.4s ease-in-out",
        }}
      ></span>
      <span
        style={{
          transform: hamBurgerClicked
            ? "rotate(45deg) translateY(-5px)"
            : "none",
          marginBottom: hamBurgerClicked ? ".6rem" : "",
        }}
      ></span>
    </div>
  );
};
