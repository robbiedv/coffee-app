import React from "react";
import "./css/App.scss";
import Slider from "./components/slider";
import Display from "./components/display";

function Main() {
  return (
    <div className="main">
      <header className="header"></header>
      <Display id="weight-in"/>
      <Slider />
      <Display id="grind"/>
      <Display id="timer"/>
      <Display id="weight-out"/>
      <Display id="ratio"/>
    </div>
  );
}

export default Main;
