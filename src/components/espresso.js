import React from "react";
import "./../css/App.scss";

function Espresso() {

  function grindHandler() {
    let value = document.getElementById("grind-value");
    let slider = document.getElementById("grind-slider");
    // display.innerHTML = slider.value + "g";

    slider.oninput = function () {
      value.innerHTML = this.value;
    };
  }

  function weightInHandler() {
    let value = document.getElementById("weight-in-value");
    let slider = document.getElementById("weight-in-slider");
    // display.innerHTML = slider.value + "g";

    slider.oninput = function () {
      value.innerHTML = this.value + "g";
    };
  }

  function weightOutHandler() {
    let value = document.getElementById("weight-out-value");
    let slider = document.getElementById("weight-out-slider");

    slider.oninput = function () {
      value.innerHTML = this.value + "g";
    };
  }

  return (
    <div className="recipe-page">
    <div className="display" id="grind">
      <p className="display-value" id="grind-value"></p>
    </div>
    <p className="labels">GRIND</p>
    <div className="slider-container">
      <input
        className="slider"
        id="grind-slider"
        type="range"
        min="0"
        max="20"
        step="0.1"
        defaultValue="20"
        onChange={grindHandler}
      ></input>
    </div>
      <div className="display" id="weight-in">
        <p className="display-value" id="weight-in-value"></p>
      </div>
      <p className="labels">WEIGHT IN</p>
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
          className="button labels"
          id="time-button"
        >START TIMER</button>
      </div>
      <div className="display" id="weight-out">
        <p className="display-value" id="weight-out-value"></p>
      </div>
      <p className="labels">WEIGHT OUT</p>
      <div className="slider-container">
        <input
          className="slider"
          id="weight-out-slider"
          type="range"
          min="20"
          max="50"
          step="0.1"
          defaultValue="40"
          onChange={weightOutHandler}
        ></input>
      </div>
    </div>
  );
}

export default Espresso;
