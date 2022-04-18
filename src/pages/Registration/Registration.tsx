import React from 'react';
import './Registration.css'

const Registration = () => {
    return <div className='ContainerRegistration'>
<div className="RegTitle">
    <h1 className="RegTitle_login active">Registration Confirmation</h1>
</div>
<div className="RegText">
    <span>Please activate your accaunt with the activation link in the emain</span> 
    <a href='mailto:test@gmail.com'>test@gmail.com</a>
    <span>Please, check your email</span>
</div>
<div className="Reg_Btn">
    <button className="Reg_BtnHome">Home</button>
</div>
    </div>
}

export default Registration