import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 330, clear: "both",  textAlign: "center", margin: 0 }}
      className="jumbotron">
     Don't click an image more than once to increase your high score!
    </div>
  );
}

export default Jumbotron;
