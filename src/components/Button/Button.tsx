import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  onClick?: (event:any) => void;
  className?: string;
  btnContent: any;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  btnContent,
  disabled,
}) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {btnContent}
    </button>
  );
};

export default Button;
