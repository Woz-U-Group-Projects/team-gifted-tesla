import React, { Component } from 'react';
import "./Footer.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="footer-about-col">
                    <h3 className="h3-title">About this Website</h3>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="footer-navigation-col">
                    <h3 className="navigation-title">Navigation</h3>
                    <ul className="nav-grid-1">
                        <li className="list-1"><Link className="footer-nav nav-contact-link" to="/contact" >Contact us</Link></li>
                        <li className="list-1"><Link className="footer-nav nav-about-link" to="#/" >About us</Link></li>
                        <li className="list-1"><Link className="footer-nav nav-motherboard-link" to="#/" >Github</Link></li>
                        <li className="list-1"><Link className="footer-nav nav-processor-link" to="#/" >LinkedIn</Link></li>
                    </ul>
                    <ul className="nav-grid-2">
                        <li className="list-2"><Link className="footer-nav nav-graphic-link" to="#/" >Products</Link></li>
                        <li className="list-2"><Link className="footer-nav nav-signup-link" to="#/" >Signup</Link></li>
                        <li className="list-2"><Link className="footer-nav nav-login-link" to="#/" >Login</Link></li>
                        <li className="list-2"><Link className="footer-nav nav-profile-link" to="#/" >Profile</Link></li>
                    </ul>
                </div>
                <div className="footer-links-col">
                    <a className="linked-link" target="_blank" href="https://www.linkedin.com/in/nolan-harman-6ba784183/"><i class="fab fa-linkedin"></i></a>
                    <a className="github-link" target="_blank" href="https://github.com/DriAzz"><i class="fab fa-github"></i></a>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;