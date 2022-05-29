import React from 'react';
import classes from "./Button.module.css";

const Button = ({children, styleClass, onClick}) => {
    return (
        <button onClick={onClick} className={classes[styleClass]}>{children}</button>
    );
};

export default Button;
