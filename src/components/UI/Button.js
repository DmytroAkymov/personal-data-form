import React from 'react';
import Styles from './Button.module.css';

const Button = (props) => {
    return (
        <button
            className={Styles['btn-create-user']}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
