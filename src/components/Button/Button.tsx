import React, { FC } from "react";
import classNames from "classnames";

import "./Button.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?:boolean;
};

const Button: FC<ButtonProps> = ({ text, onClick, className, disabled }) => {
  return (
    <button disabled={disabled} className={classNames("defButton", className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
