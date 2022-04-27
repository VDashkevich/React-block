import React, { useState } from "react";
import "./AutorizationPage.css";
import Login from "../Login";
import Button from "../../components/Button";
import Input from "../../components/Input";
import RegistrationPage from "../RegistrationPage";
import Registration from "../Registration";
import Header from "../Login/Header";
import RegistrationForm from "../RegistrationPage/RegistrationPage";
import LoginForm from "../Login/Login";
import classNames from "classnames";

const AutorizationPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);

  const onClickLogin = (name: string) => {
    setActiveTab(name);
  };

  const onClickRegister = () => {
    setConfirmed(true);
  };

  return !isConfirmed ? (
    <div className="containerLogin">
      <Header onClick={onClickLogin} activeTab={activeTab} />
      {activeTab  === "login" ? (
        <LoginForm onClickConfirm={onClickRegister}/>
      ) : (
        <RegistrationForm
        onClick={onClickLogin}  onClickConfirm={onClickRegister}
        />
      )}
    </div>
  ) : (
    <Registration />
  );
};

export default AutorizationPage;
