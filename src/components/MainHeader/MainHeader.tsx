import React, { useState } from "react";
import "./MainHeader.css";
import classNames from "classnames";
import { Theme, UseThemeContext } from "../../context/themeModeContext";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const { theme, onChangeTheme = () => {} } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };

  return (
    <div className="mainClass">
      <div
        className={classNames(
          {
            ["mainHeader"]: isLightTheme,
          },
          { ["mainHeaderDark"]: !isLightTheme }
        )}
      >
        <nav className="navMainHeader">
          <div className="burgerBtn" onClick={() => setMenuActive(!menuActive)}>
            <span>☰</span>
          </div>
          <p className="userName" onClick={() => setUserActive(!userActive)}>
            Username
          </p>
        </nav>

        <div className={"content " + (!menuActive ? "d-none" : "")}>
          <button className="done">х</button>
          <NavLink className="contentP" to="cards-list">My posts</NavLink>
          <NavLink className="contentP" to="autorization">
            Autorization page
          </NavLink>
          <NavLink className="contentP" to="cards-list/:id">
            Post
          </NavLink>
          <button className="logOut">Log out</button>
        </div>

        <div className={"userLogin " + (!userActive ? "d-none" : "")}>
          <button className="done">х</button>
          <div className="userWrap">
            <button className="btnLogin">Login</button>
            <button className="btnRegistration">Registration</button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainHeader;
