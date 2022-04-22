import React from "react";
import "./Button.css";

const Button = ({text}: any) => {
  return (
      <>
    <button className="defButton">{text}</button>
  </>
  );
};

export default Button;
