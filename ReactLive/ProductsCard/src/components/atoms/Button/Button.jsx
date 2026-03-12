import React from "react";
import "./Buttton.css";

function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default Button;
