import React, { Component } from 'react';
import "./Drop.css";


class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown" style={{ width: "200px" }} >
                <div className="button" onClick={this.showDropdownMenu}>Sign in</div>

                {this.state.displayMenu ? (
                    <ul>
                        <li><a className="signup-drop" href="/users/signup">Signup</a></li>
                        <li><a className="login-drop" href="/users/login">Login</a></li>        
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;