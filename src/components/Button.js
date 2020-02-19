import React from 'react';
import '../css/Button.css';

const Button = (props) => {
    return <button className = "button" id = {props.info} onClick = {props.click}>{props.info}</button>
}

export default Button;