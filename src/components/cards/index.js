import React from "react";

function Card({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="card"
    >
      {children}
    </div>
  );
}

export default Card;
