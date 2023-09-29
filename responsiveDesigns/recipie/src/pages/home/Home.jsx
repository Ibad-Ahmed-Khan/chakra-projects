import React from "react";
import "./Home.css";
import { Popular } from "../../components/popular/Popular";
import { Veggie } from "../../components/veggie/Veggie";

export const Home = () => {
  return (
    <div className="home-parent">
      <Veggie />
      <Popular />
    </div>
  );
};
