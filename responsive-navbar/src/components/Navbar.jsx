import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const hamburger = () => {
    setIsopen(!isopen);
  };

  return (
    <div className="parent">
      <div className="nav__list">
        <button onClick={hamburger} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="ul__list" style={{ height: isopen ? "" : "0" }}>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">services</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">portfolio</a>
          </li>
          <li>
            <a href="">contactus</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
