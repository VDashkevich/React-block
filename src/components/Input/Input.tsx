import React, { FC, FocusEventHandler } from "react";
import "./Input.css";

type InputProps = {
  value: string;
  name: string;
  onChange?: (value: any) => void;
  type: string;
  className?: string;
  onBlur?: (e: FocusEventHandler<HTMLInputElement> | undefined) => void;
};

const Input: FC<InputProps> = ({
  value,
  name,
  onChange,
  type,
  className,
  onBlur,
}: any) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      className={className}
      onBlur={onBlur}
    />
  );
};

export default Input;
