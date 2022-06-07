import React, { FC } from "react";
import "./ToggleSwitch.css";
import { Theme, UseThemeContext } from "./../../context/themeModeContext";

const ToggleSwitch = () => {
  const { theme, onChangeTheme = () => {} } = UseThemeContext();

  const onClickTheme = () => {
    onChangeTheme(theme === "light" ? Theme.Dark : Theme.Light);
  };

  return (
    <div className="form_toggle">
      <div className="form_toggle-item item-1">
        <input
          onClick={() => onClickTheme()}
          id="fid-1"
          type="radio"
          name="radio"
          value="light"
          defaultChecked
        />
        <label htmlFor="fid-1">{theme === Theme.Dark ? "Light" : "Dark"}</label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
