import React, { Component } from 'react';
import axios from 'axios';
import "./Header.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';


const Header = props => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1 className="header-title">Mission Assistance</h1>
                <div className="link-container">
                    {/* Potential Search Bar */}
                    <p className="header-search-text">Looking for something?</p>
                    <input className="header-search" placeholder="Search" />
                    <Link className="contactLink" to="/contact">1-800-555-555</Link>
                    <Link className="signup-login-link" to="/authenticate">Signup or Login</Link>
                    <Dropdown className="dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu">
                            <Dropdown.Item className="dropdown-1" href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item className="dropdown-2" href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item className="dropdown-3" href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;