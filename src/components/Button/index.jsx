import React from 'react';

import "./button.css";

const Button = (props) =>{
    return (
        <button type="button" className="button" >{props.content}</button>
    )
}

export default Button;
