import React from "react";
import "./Header.css";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="h-container">
          <div className="logo"></div>
          <ul className="ul__list">
            <li>
              <a href="">residencies</a>
            </li>
            <li>
              <a href="">our value</a>
            </li>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">get started</a>
            </li>
            <li>
              <button>
                <a href="">contact</a>
              </button>
            </li>
          </ul>
        </div>
        <Hero />
      </section>
    </>
  );
};

export default Header;
