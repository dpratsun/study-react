import React from 'react';
import classes from "./Button.module.css";

const Button = ({style, children, type, onClick}) => {

    const btnClasses = [classes.btn];

    if (type === 'delete') {
        btnClasses.push(classes.red);
    }

    return (
        <button style={style} onClick={onClick} className={btnClasses.join(' ')}>{children}</button>
    );
};

export default Button;
