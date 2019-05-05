import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both",  textAlign: "center", margin: 0 }}
      className="jumbotron"
    >
     Click any image to start.
     Don't click an image more than once to increase your high score!
    </div>
  );
}

export default Jumbotron;
