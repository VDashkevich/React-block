import React from "react";
import "./Registration.css";
import Button from "../../components/Button";
import { Theme, UseThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Registration = () => {
  const { theme, onChangeTheme = () => {} } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };

  return (
    <div 
    className={classNames(
      {
        ["containerRegistration"]: isLightTheme,
      },
      { ["containerRegistrationDark"]: !isLightTheme }
    )}>
      <div className="regTitle">
        <h1 className="regTitle_login active">Registration Confirmation</h1>
      </div>
      <div className="regText">
        <span>
          Please activate your accaunt with the activation link in the emain
        </span>
        <a href="mailto:test@gmail.com">test@gmail.com</a>
        <span>Please, check your email</span>
      </div>
      <div className="reg_Btn">
        <Button text="Home" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Registration;
