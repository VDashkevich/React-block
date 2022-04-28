import React, { FC } from "react";
import classNames from "classnames";

import "./Header.css";

type HeaderProps = {
  onClick: (tabName: string) => void;
  activeTab: string;
};

const Header: FC<HeaderProps> = ({ onClick, activeTab }) => {
  const isLoginActive = activeTab === "login";

  return (
    <div className="logTitle">
      <button
        className={classNames("logTitle_login", { ["active"]: isLoginActive })}
        onClick={() => onClick("login")}
      >
        Login
      </button>
      <button
        className={classNames("logTitle_Reg", { ["active"]: !isLoginActive })}
        onClick={() => onClick("registration")}
      >
        Registration
      </button>
    </div>
  );
};

export default Header;

