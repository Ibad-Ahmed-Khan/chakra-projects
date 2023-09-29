import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="parent">
      <Link to="/shop">shop</Link>
      <Link to="/cart">cart</Link>
    </div>
  );
};

export default Navbar;
