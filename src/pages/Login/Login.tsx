import React, { useState } from "react";
import Button from "../../components/Button";
import "./Login.css";
import Input from "../../components/Input";

const Login = (props: any) => {
 
    return (
    <div className="containerLogin">
      <div className="logTitle">
        <button className="logTitle_login">Login</button>
        <button className="logTitle_Reg">Registration</button>
      </div>
      <div className="logInputs">
          <Input type='email' className="logInputs_Email" text='Email'/>
          <Input type='password' className="logInputs_Password" text='Password'/>
        <div className="logInputs_Btn">
          <Button className="logInputs_BtnLogin" text="Login" />
        </div>
      </div>
      <div className="logReset">
        <p className="logReset_Text">Forgot your password?</p>
        <a href="#" className="logReset_Link">
          Reset Password
        </a>
      </div>
    </div>
  );
};

export default Login;
