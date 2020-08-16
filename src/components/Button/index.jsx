import React from 'react';

import "./button.css";

const Button = (props) =>{
    return (
        <button type="button" className="button" >{props.children}</button>
    )
}

export default Button;
