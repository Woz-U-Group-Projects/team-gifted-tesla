import React, { Component } from 'react';
import axios from 'axios';
import "./Header.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Dropdown, Collapse } from 'react-bootstrap';


const Header = props => {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <h1 className="header-title">Mission Assistance</h1>
                    <div className="link-container">
                        {/* Potential Search Bar */}
                        <Dropdown className="dropdown-products"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}>
                            <Dropdown.Toggle className="dropdown-basic" variant="success" id="dropdown-basic">
                                Products
                        </Dropdown.Toggle>
                            <Collapse in={open}>
                                <Dropdown.Menu id="example-fade-text" className="dropdown-menu-products">
                                    <Dropdown.Item className="dropdowns" href="#/products/processors">Processors</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/products/motherboards">Motherboards</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/products/video-cards">Video Cards</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/products/ram">RAM</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/action-3">Solid State Drives</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/action-3">Hard Disk Drives</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/action-3">Power Supply's</Dropdown.Item>
                                    <Dropdown.Item className="dropdowns" href="#/action-3">CD ROMs</Dropdown.Item>
                                </Dropdown.Menu>
                            </Collapse>
                        </Dropdown>
                        <p className="header-search-text">Looking for something?</p>
                        <input className="header-search" placeholder="Search" />
                        <Dropdown className="dropdown"
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-fade-text"
                            aria-expanded={open2}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                More
                        </Dropdown.Toggle>
                            <Collapse in={open2}>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Dropdown.Item className="dropdown-1" href="/signup">Signup</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-1" href="/login">Login</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-2" href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-3" href="/signout">Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Collapse>
                        </Dropdown>
                        <Link className="contactLink" to="/contact">1-800-555-555</Link>
                        <Link className="home-link" to="/">Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;