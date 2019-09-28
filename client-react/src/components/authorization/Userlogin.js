import React, { Component } from 'react';
import "./Userlogin";
import { Redirect } from 'react-router-dom';

const formValid = ({ ...rest }) => {
    let valid = true;

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Userlogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            redirect: false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/users/profile" />
        }
    }

    loginSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => result.json())
            .then((info) => { console.log(info) })

        if (formValid(this.state)) {
            this.setState({ redirect: true })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1 className="form-title">Login</h1>
                    <form className="login-form" onSubmit={this.loginSubmit} noValidate>
                        <label className="label label-username" htmlFor="username">Username</label>
                        <input
                            className="input-username"
                            placeholder="Username"
                            type="text"
                            name="username"
                        />
                        <label className="label label-password" htmlFor="password">Password</label>
                        <input
                            className="input-password"
                            placeholder="Password"
                            type="password"
                            name="password"
                        />
                        <div className="login-createAccount">
                            {this.renderRedirect()}
                            <button type="submit">Login</button>
                            <small>Need to create an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Userlogin;