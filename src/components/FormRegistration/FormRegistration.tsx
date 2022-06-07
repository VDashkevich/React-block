import React, { useState, FC, useEffect } from "react";
import "./FormRegistration.css";
import Input from "../Input";
import Button from "../Button";
import { Theme, UseThemeContext } from "./../../context/themeModeContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import { registerUser } from "../../redux/reducers/authReducer";

type FormRegistrationProps = {
  onClick: (name: string) => void;
};

const FormRegistration: FC<FormRegistrationProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;

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

  const dispatch = useDispatch();

   const userNameHandler = (event: any) => {
    setUserName(event.target.value);
    if (event.target.value.length < 2) {
      setUserNameErr("Name must contain at least 2 symbols");
      if (!event.target.value) {
        setUserNameErr("This field must not be empty");
      }
    } else {
      setUserNameErr("");
    }
  };

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailErr("Email is not correct");
    } else {
      setEmailErr("");
    }
  };

  const passwordHandler = (event: any) => {
    setPassword(event.target.value);

    if (event.target.value.length < 8 || event.target.value.length > 15) {
      setPasswordErr("Password must contain at least 8 and no more than 15");
      if (!event.target.value) {
        setPasswordErr("This field must not be empty");
      }
    } else {
      setPasswordErr("");
    }
  };

  const confirmPasswordHandler = (event: any) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordErr("Password not confirmed");
      if (!event.target.value) {
        setConfirmPasswordErr("This field must not be empty");
      }
    } else {
      setConfirmPasswordErr("");
    }
  };

  const blurHandler = (event: any) => {
    switch (event.target.name) {
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

  const onSubmit = (event: any) => {
    event.preventDefault();
    const callback = () => {
      navigate("/activate");
    };
    dispatch(
      registerUser({
        name: userName,
        password: password,
        email: email,
        callback,
      })
    );
  };


  return (
    <div
      className={classnames(
        { ["container"]: isLightTheme },
        { ["darkContainer"]: !isLightTheme }
      )}
    >
      <form>
        <div className="input">
          
          <span>User name</span>
          <Input
            value={userName}
            onBlur={(event) => blurHandler(event)}
            onChange={userNameHandler}
            type="text"
            name="userName"
          />
          {userNameDirty && userNameErr && (
            <div style={{ color: "red" }}>{userNameErr}</div>
          )}
        </div>
        <div className="input">
          
          <span>Email</span>
          <Input
            value={email}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => emailHandler(event)}
            type="email"
            name="email"
          />
          {emailDirty && emailErr && (
            <div style={{ color: "red" }}>{emailErr}</div>
          )}
        </div>
        <div className="input">
          
          <span>Password</span>
          <Input
            value={password}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => passwordHandler(event)}
            type="password"
            name="password"
          />
          {passwordDirty && passwordErr && (
            <div style={{ color: "red" }}>{passwordErr}</div>
          )}
        </div>
        <div className="input">
          
          <span>Confirm password</span>
          <Input
            value={confirmPassword}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => confirmPasswordHandler(event)}
            type="password"
            name="confirmPassword"
          />
          {confirmPasswordDirty && confirmPasswordErr && (
            <div style={{ color: "red" }}>{confirmPasswordErr}</div>
          )}
        </div>

        <Button
          disabled={!formValid}
          className={classnames("button")}
          btnContent={"Registration"}
          onClick={onSubmit}
        />

        <div className="resetLogin">
          <span>If you have account you can</span>
          <Button
            className={"btnReset"}
            btnContent={"login"}
            onClick={() => onClick("login")}
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
