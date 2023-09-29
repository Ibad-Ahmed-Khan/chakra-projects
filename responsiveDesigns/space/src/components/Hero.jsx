import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";
import logo from "../../src/logo.svg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="block">
        <div className="hero-header">
          <div className="logo">
            <img className="logo" src={logo} alt="company-logo" />
          </div>
          <div className="nav-list">
            <div className="links">
              <a href="#home">home</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
            </div>
            <div className="social-links">
              <div className="icon">
                <FaLinkedinIn className="social-icon" size={22} />
              </div>
              <div className="icon">
                <FaFacebookF className="social-icon" size={22} />
              </div>
              <div className="icon">
                <FaInstagram className="social-icon" size={22} />
              </div>
            </div>
            <div className="btn">
              <button className="hero-btn">let's connect</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-main">
        <div className="hero-main-left">
          <h2>welcome to my portfolio</h2>

          <h1>hi! i am ibad web designer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            impedit porro quaerat dolore iure magni suscipit, debitis dolorem
            mollitia ut quibusdam, dicta earum odio repellat. Eos obcaecati
            magni alias quidem, maxime ex eaque, ullam deleniti tempore
            corrupti, iste incidunt odio.
          </p>
          <div className="block">
            <div className="btn">
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "white",
                }}
                className="hero-btn"
              >
                let's connect
                <div className="icon">
                  <FaArrowRight className="social-icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-main-right">
          <FaRocket className="rocekt" size={250} />
        </div>
      </div>
    </div>
  );
};
