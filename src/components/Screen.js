import React from 'react';
import '../css/Screen.css';

const Screen = (props) => {
    return (
        <div className = "screen">
            <p className = "text">{props.input}</p>
        </div>
    )
}

export default Screen