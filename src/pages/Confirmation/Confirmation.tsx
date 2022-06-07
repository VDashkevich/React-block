import React from "react";
import Button from "../../components/Button";
import "./Confirmation.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "./../../context/themeModeContext";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useSelector, useDispatch } from "react-redux";
import { AuthSelector, userActivate } from "../../redux/reducers/authReducer";
import { useNavigate, useParams } from "react-router-dom";

const Confirmation = () => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector(AuthSelector.getTempMail);
  const { uuid, token } = useParams();

  const onHomeClick = () => {
    dispatch(userActivate({ uuid, token, callback: () => navigate("/auth") }));
  };

  return (
    <div
      className={classnames(
        "confirmation",
        { ["container"]: isLightTheme },
        {
          ["darkContainer"]: !isLightTheme,
        }
      )}
    >
      <ToggleSwitch />
      <div className="confirmationContainer">
        <h1 className="title">Registration Confirmation</h1>

        <p className="confirmationMessage">
          Please activate you account with the activation link in the email
          <Button className={"btnReset"} btnContent={email || ""} />
          Please, check your email.
        </p>
        <Button
          className={classnames("button")}
          btnContent={"Confirm"}
          onClick={onHomeClick}
        />
      </div>
    </div>
  );
};

export default Confirmation;
