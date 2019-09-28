import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Header = props => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1 className="header-title">Mission Assistance</h1>
                <div className="link-container">
                    <Link className="home-link" to="/">Home</Link>
                    <Link className="signup-login-link" to="/authenticate">Signup or Login</Link>
                    <Link className="contactLink" to="/contact">1-800-555-555</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;