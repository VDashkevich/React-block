import React from 'react';
import './Registration.css'
import Button from '../../components/Button';

const Registration = () => {
    return <div className='containerRegistration'>
<div className="regTitle">
    <h1 className="regTitle_login active">Registration Confirmation</h1>
</div>
<div className="regText">
    <span>Please activate your accaunt with the activation link in the emain</span> 
    <a href='mailto:test@gmail.com'>test@gmail.com</a>
    <span>Please, check your email</span>
</div>
<div className="reg_Btn">
    <Button text='Home'/>
</div>
    </div>
}

export default Registration