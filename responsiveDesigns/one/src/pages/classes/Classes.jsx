import React, { useState } from "react";
import "./Classes.css";
import "../pages.css";
import { ClassesData } from "./ClassesData";

export const Classes = () => {
  const [tabs, setTabs] = useState("");

  return (
    <div className="Classes-parent container">
      <h2 className="title">classes</h2>
      <div className="classes__left">
        {ClassesData.map((item, i) => {
          return (
            <div className="block">
              <button onClick={() => setTabs(i)} className="classes__btn">
                <h3>Btn{i + 1} </h3>
              </button>
            </div>
          );
        })}
      </div>
      <p className="classes__p">{ClassesData[tabs]} </p>
      <div className="classes__right"></div>
    </div>
  );
};
