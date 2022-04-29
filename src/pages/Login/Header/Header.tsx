import React, { FC } from "react";
import classNames from "classnames";
import { Theme, UseThemeContext } from "../../../context/themeModeContext";
import "./Header.css";

type HeaderProps = {
  onClick: (tabName: string) => void;
  activeTab: string;
};

const Header: FC<HeaderProps> = ({ onClick, activeTab }) => {
  const isLoginActive = activeTab === "login";
  const { theme, onChangeTheme = () => {} } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };
  return (
    <div className="logTitle">
      <button
        className={classNames(
          { ["active"]: isLoginActive },
          {
            ["logTitle_login"]: isLightTheme,
          },
          { ["logTitle_loginDark"]: !isLightTheme }
        )}
        onClick={() => onClick("login")}
      >
        Login
      </button>
      <button
        className={classNames(
          { ["active"]: !isLoginActive },
          {
            ["logTitle_Reg"]: isLightTheme,
          },
          { ["logTitle_RegDark"]: !isLightTheme }
        )}
        onClick={() => onClick("registration")}
      >
        Registration
      </button>
    </div>
  );
};

export default Header;
