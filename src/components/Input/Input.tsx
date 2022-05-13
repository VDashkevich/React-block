import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  type: string;
  className: string;
  placeholder: string;
  value?: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  name: string;
};

const Input = ({
  onBlur,
  className,
  type,
  text,
  onChange,
  placeholder,
  value,
  name,
}: any) => {
  return (
    <div className={className}>
      <p>{text}</p>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;
