import React, { Component } from "react";
import "./../css/App.scss";

class Espresso extends Component {
  state = {
    timerStatus: false,
    timerValue: 0,
  };

  handleTimerClick = () => {
    this.setState((state) => {
      if (this.state.timerStatus === false) {
        clearInterval(this.timer);
        this.setState({ timerValue: Date.now() });
      } else {
        this.setState({ running: false });
      }
    });
  };

  render() {
    const { timerStatus, timerValue } = this.state;

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
        {/*GRIND SETTING*/}
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
            defaultValue="10"
            onChange={grindHandler}
          ></input>
        </div>
        {/*WEIGHT IN SETTING*/}
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
        {/*TIMER SETTING*/}
        <div className="display" id="time">
          <p id="time-value">{timerValue}s</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button labels"
            id="time-button"
            onClick={this.handleTimerClick}
          >
            {timerStatus ? "STOP TIMER" : "START TIMER"}
          </button>
        </div>
        {/*WEIGHT OUT SETTING*/}
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
        <div className="button-container">
          <button type="button" className="button labels" id="results-button">
            RESULTS
          </button>
        </div>
      </div>
    );
  }
}

export default Espresso;
