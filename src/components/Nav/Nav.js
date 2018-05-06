import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav>
    <div id="navWrap">
      <h1><a href="/">Clicky Game</a></h1>
      <div id="guess">You guessed correctly!</div>
      <div id="score">
        Score: <span id="scoreTracker">{props.userclicks}</span> |
        Top score: <span id="topScore">{props.topscore}</span>
      </div>
    </div>
  </nav>
);

export default Nav;
