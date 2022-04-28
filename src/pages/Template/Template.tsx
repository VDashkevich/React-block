import React from 'react';
import './TemplateDark.css'
import './Template.css'

import Button from '../../components/Button';

const Template = () => {
    return <div className='containerTemplate'>
<div className="tempTitle">
    <h1 className="regTitle_login active">Template title</h1>
</div>
<div className="tempText">
    <span>Template texty</span> 
</div>
<div className="temp_Btn">
    <Button text='button'/>
</div>
    </div>
}

export default Template