import React from 'react';
import "./Header.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Header = props => {
    return (
        <div className="main-container">
            <h1 className="header-title">Mission Assistance</h1>
            <div className="link-container">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-more">
                        More
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-more">
                        <Dropdown.Item className="dropdown-item" href="/signup">Signup</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/login">Login</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="/logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link className="contact-link" to="/contact">1-800-555-555</Link>
                <Link className="home-link" to="/">Home</Link>
            </div>
            <div className="input-container">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-products">
                        Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="product-dropdown">
                        <Dropdown.Item href="/motherboards">Motherboards</Dropdown.Item>
                        <Dropdown.Item href="/graphics">Graphics Cards</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Processors</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">RAM</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Power Sources</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Solid State Drives</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Hard Disk Drive</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Disk Drives</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button className="header-search-button"><i className="fa fa-search"></i></button>
                <input className="header-search" placeholder="Search Here"  />
                <p className="header-search-text">Looking for something?</p>
            </div>
        </div>
    )
}

export default Header;