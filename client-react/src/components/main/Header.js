import React from 'react';
import "./Header.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';

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
                        <Dropdown.Item className="dropdown-item" href="#/action-1">Signup</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#/action-2">Login</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#/action-3">Profile</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#/action-4">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link className="contact-link" to="/contact">1-800-555-555</Link>
                <Link className="home-link" to="/home">Home</Link>
            </div>
            <div className="input-container">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-products">
                        Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="product-dropdown">
                        <Dropdown.Item href="#/action-1">Motherboards</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Processors</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Graphics Cards</Dropdown.Item>
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