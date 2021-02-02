import React from 'react'
import { 
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
 } from 'react-router-dom';

export const Button = (props) => {
    return (
        <Router>
            <Link to={`${props.link}`}  className={`btn ${props.buttonClass} my-2 btn-lg`}>{props.text}</Link>
            
        </Router>
    );
}

export default Button;