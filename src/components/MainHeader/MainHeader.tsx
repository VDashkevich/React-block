import React, { useState } from "react";
import "./MainHeader.css";

const MainHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  return (
    <div>
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
        <h1>All posts</h1>
        <p className="contentP">
          My posts
          <button className="addPost">Add</button>
        </p>
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
  );
};

export default MainHeader;
