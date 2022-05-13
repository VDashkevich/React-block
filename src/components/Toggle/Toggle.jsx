import React, { useState } from "react";
import "./Toggle.css";
import { Theme, UseThemeContext } from "../../context/themeModeContext";

const Toggle = () => {
  const { theme, onChangeTheme = () => {} } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickThemeDark = () => {
    onChangeTheme(Theme.Dark);
  };
  const onClickThemeLight = () => {
    onChangeTheme(Theme.Light);
  };
  const onClickTheme = () => {
    onChangeTheme(theme === "light" ? Theme.Dark : Theme.Light);
    // console.log(theme)
    };

  return (
    <div className="form_toggle" >
      <div className="form_toggle-item item-1" onClick={onClickThemeLight}>
        <input id="fid-1" type="radio" name="radio" value="off" checked />
        <label for="fid-1" >Light</label>
      </div>
      <div className="form_toggle-item item-2" onClick={onClickThemeDark}>
        <input id="fid-2" type="radio" name="radio" value="on"  />
        <label for="fid-2" >Dark</label>
      </div>
    </div>
  );
};

export default Toggle;
