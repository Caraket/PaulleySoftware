import React from 'react'
import { Link } from 'react-router-dom';

export const Button = (props) => {
    return (
            <Link to={`${props.link}`}  className={`btn ${props.buttonClass} my-2 btn-lg`}>{props.text}</Link>
            
        
    );
}

export default Button;