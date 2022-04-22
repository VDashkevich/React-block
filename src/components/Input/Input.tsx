import React from "react";
import "./Input.css";

const Input = ({className, type, text}: any) => {
  return (
    <>
      <div className={className}>
        <p>{text}</p>
        <input type={type} />
      </div>

    </>
  );
};

export default Input;
