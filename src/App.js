import React from "react";
import "./css/App.scss";
import Espresso from "./components/espresso";

function Main() {
  return (
    <div className="main">
      <header className="header"></header>
      <Espresso />
    </div>
  );
}

export default Main;
