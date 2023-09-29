import React from "react";

export default function LoadingSpinner(props) {
  return (
    <div className="spinner-container">
      <div
        className="loading-spinner"
        style={{ width: props.width, height: props.height }}
      ></div>
    </div>
  );
}
