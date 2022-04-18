import React from 'react';
import './Login.css'

const Login = (props: any) => {
    return <div className='ContainerLogin'>
<div className="LogTitle">
    <h1 className="LogTitle_login active">Login</h1>
    <h1>|</h1>
    <h1 className="LogTitle_Reg active">Registration</h1>
</div>
<div className="LogInputs">
    <div className="LogInputs_Email">
        <p>Email</p>
        <input type='email' />
    </div>
    <div className="LogInputs_Password">
        <p>Password</p>
        <input type='password' />
    </div>
    <div className="LogInputs_Btn">
        <button className="LogInputs_BtnLogin">Login</button>
    </div>
</div>
<div className="LogReset">
    <p className="LogReset_Text">Forgot your password?</p>
    <a href="#" className="LogReset_Link">Reset Password</a>
</div>
    </div>
}

export default Login
