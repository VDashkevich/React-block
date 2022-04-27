import React, { useState, useEffect, FC } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "./Header";
import RegistrationForm from "../RegistrationPage";
import Registration from "../Registration";
import "./Login.css";

type LoginFormProps = {
  onClickConfirm: () => void;
};

const LoginForm: FC<LoginFormProps> = ({ onClickConfirm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailErr, setEmailErr] = useState("This field must not be empty");
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailErr || passwordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailErr, passwordErr]);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 15) {
      setPasswordErr(
        "Password must contain at least 8 symbols and no more than 15 symbols"
      );
      if (!e.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <form className="logInputs">
      <div>
        <Input
          type="email"
          className="logInputs_Email"
          text="Email"
          placeholder={"Enter your email"}
          value={email}
          onBlur={(e: any) => blurHandler(e)}
          onChange={(e: any) => emailHandler(e)}
          name="email"
        />
        {emailDirty && emailErr && (
          <div style={{ color: "red" }}>{emailErr}</div>
        )}
      </div>
      <div>
        <Input
          type="password"
          className="logInputs_Password"
          text="Password"
          placeholder={"Enter your password"}
          value={password}
          onBlur={(e: any) => blurHandler(e)}
          onChange={(e: any) => passwordHandler(e)}
          name="password"
        />
        {passwordDirty && passwordErr && (
          <div style={{ color: "red" }}>{passwordErr}</div>
        )}
      </div>
      <div className="logInputs_Btn">
        <Button
          className="logInputs_BtnLogin"
          text="Login"
          onClick={() => {}}
          disabled={!formValid}
        />
      </div>
      <div className="logReset">
        <div>
          <p className="logReset_Text">Forgot your password?</p>
        </div>
        <div>
          <a href="#" className="logReset_Link">
            Reset Password
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
