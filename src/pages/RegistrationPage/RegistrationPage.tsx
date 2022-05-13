import React, { useState, FC, useEffect } from "react";
import classNames from "classnames";
import Button from "../../components/Button";
import "./RegistrationPage.css";
import Input from "../../components/Input";
import { Theme, UseThemeContext } from "../../context/themeModeContext";
import { useNavigate } from "react-router";

type RegistrationFormProps = {
  onClick: (name: string) => void;
  onClickConfirm: () => void;
};

const RegistrationForm: FC<RegistrationFormProps> = ({
  onClick,
  onClickConfirm,
}) => {
  const { theme, onChangeTheme = () => {} } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/confirm", { state: { email } });
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

  const [userNameErr, setUserNameErr] = useState(
    "This field must not be empty"
  );
  const [emailErr, setEmailErr] = useState("This field must not be empty");
  const [passwordErr, setPasswordErr] = useState(
    "This field must not be empty"
  );
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(
    "This field must not be empty"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (userNameErr || emailErr || passwordErr || confirmPasswordErr) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameErr, emailErr, passwordErr, confirmPasswordErr]);

  const userNameHandler = (e: any) => {
    setUserName(e.target.value);
    if (e.target.value.length < 8) {
      setUserNameErr("Your name must contain at least 8 symbols");
      if (!e.target.value) {
        setUserNameErr("This field must not be empty");
      }
    } else {
      setUserNameErr("");
    }
  };

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
      setPasswordErr("Password must contain at least 8 and no more than 15");
      if (!e.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const confirmPasswordHandler = (e: any) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordErr("Password not confirmed");
      if (!e.target.value) {
        setConfirmPasswordErr("This field must not be empty");
      }
    } else {
      setConfirmPasswordErr("");
    }
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;

      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
    }
  };

  return (
    <form
      className={classNames(
        {
          ["containerRegistrationPage"]: isLightTheme,
        },
        { ["containerRegistrationPageDark"]: !isLightTheme }
      )}
    >
      <div className="logInputs">
        <div>
          <Input
            type="text"
            placeholder={"Enter your user name"}
            value={userName}
            onBlur={(e: any) => blurHandler(e)}
            onChange={userNameHandler}
            name="userName"
            className="logInputs_UserName"
            text="User name"
          />
          {userNameDirty && userNameErr && (
            <div style={{ color: "red" }}>{userNameErr}</div>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder={"Enter your email"}
            className="logInputs_Email"
            text="Email"
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
            placeholder={"Enter your password"}
            className="logInputs_Password"
            text="Password"
            value={password}
            onBlur={(e: any) => blurHandler(e)}
            onChange={(e: any) => passwordHandler(e)}
            type="password"
            name="password"
          />
          {passwordDirty && passwordErr && (
            <div style={{ color: "red" }}>{passwordErr}</div>
          )}
        </div>
        <div>
          <Input
            placeholder={"Enter your password again"}
            type="password"
            className="logInputs_ConfPassword"
            text="Confirm Password"
            value={confirmPassword}
            onBlur={(e: any) => blurHandler(e)}
            onChange={(e: any) => confirmPasswordHandler(e)}
            name="confirmPassword"
          />
          {confirmPasswordDirty && confirmPasswordErr && (
            <div style={{ color: "red" }}>{confirmPasswordErr}</div>
          )}
        </div>
        <div className="logInputs_Btn">
          <Button
            disabled={!formValid}
            className="logInputs_BtnLogin"
            text="Registration"
            onClick={onSubmit}
          />
        </div>
      </div>
      <div className="logReset">
        <p className="logReset_Text">Already have an account?</p>
        <a href="#" className="logReset_Link" onClick={() => onClick("login")}>
          Login
        </a>
      </div>
    </form>
  );
};

export default RegistrationForm;
