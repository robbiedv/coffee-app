import React from "react";
import "./../css/App.scss";

function Recipe() {

  function weightInHandler() {
    let value = document.getElementById("weight-in-value");
    let slider = document.getElementById("weight-in-slider");
    // display.innerHTML = slider.value + "g";

    slider.oninput = function () {
      value.innerHTML = this.value + "g";
    };
  }

  return (
    <div className="recipe-page">
      <div className="display" id="weight-in">
        <p className="display-value" id="weight-in-value"></p>
      </div>
      <div className="slider-container">
        <input
          className="slider"
          id="weight-in-slider"
          type="range"
          min="12"
          max="40"
          step="0.1"
          defaultValue="20"
          onChange={weightInHandler}
        ></input>
      </div>
      <div className="display" id="time">
        <p id="time-unit">
          <span id="time-value"></span>
        </p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          id="time-button"
        >START TIMER</button>
      </div>
    </div>
  );
}

export default Recipe;
