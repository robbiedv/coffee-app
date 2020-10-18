import React from "react";
import "./../css/App.scss";

function Slider() {
  return (
      <div className="slider-container">
        <input
          type="range"
          min="14"
          max="40"
          value="20"
          className="slider"
          id="slider-range"
        ></input>
      </div>
  );
}

export default Slider;
