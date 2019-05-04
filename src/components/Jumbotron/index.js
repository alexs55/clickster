import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both",  textAlign: "center", margin: 0 }}
      className="jumbotron"
    >
     Click any image to start.

     Dont click an image more than once to win!
    </div>
  );
}

export default Jumbotron;
