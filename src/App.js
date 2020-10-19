import React from "react";
import "./css/App.scss";
import Recipe from "./components/recipe";

function Main() {
  return (
    <div className="main">
      <header className="header"></header>
      <Recipe />
    </div>
  );
}

export default Main;
