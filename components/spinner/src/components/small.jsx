import React from "react";
import "./small.css";
import LoadingSpinner from "./LoadingSpinner";

function Small() {
  const items = [
    { width: "100px", height: "100px" },
    { width: "200px", height: "200px" },
    { width: "300px", height: "300px" },
    { width: "400px", height: "400px" },
  ];

  return (
    <div className="spinner-container">
      {items.map((item, i) => {
        return <LoadingSpinner width={item.width} height={item.height} />;
      })}
    </div>
  );
}

export default Small;
