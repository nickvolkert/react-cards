import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav>
    <div id="navWrap">
      <h1><a href="/">Clicky Game</a></h1>
      <div id="guess">You guessed correctly!</div>
      <div id="score">
        Score: <span id="scoreTracker">1</span> |
        Top score: <span id="topScore">1</span>
      </div>
    </div>
  </nav>
);

export default Nav;
