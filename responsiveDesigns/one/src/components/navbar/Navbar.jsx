import React, { useState } from "react";
import "./Navbar.css";
import { Hamburger } from "./hamburger/Hamburger";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [hamBurgerClicked, setHamBurgerClicked] = useState(false);

  const hamBurgertoggle = () => {
    setHamBurgerClicked(!hamBurgerClicked);
  };

  return (
    <div className="Navbar-parent">
      <Hamburger onToggle={hamBurgertoggle} />
      <ul
        hamBurgertoggle={hamBurgertoggle}
        style={{
          transform: hamBurgerClicked ? "translateY(0)" : "translateY(-300%)",
        }}
      >
        <Link onClick={hamBurgertoggle} to="/">
          home
        </Link>
        <Link onClick={hamBurgertoggle} to="/about">
          about
        </Link>
        <Link onClick={hamBurgertoggle} to="/classes">
          classes
        </Link>
        <Link onClick={hamBurgertoggle} to="/contact">
          contact
        </Link>
        <Link onClick={hamBurgertoggle} to="/blog">
          blog
        </Link>
      </ul>
    </div>
  );
};
