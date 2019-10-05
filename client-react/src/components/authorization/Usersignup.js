import React, { Component } from 'react'
import { register } from './UserFunctions'
import "./Usersignup.css";

class Usersignup extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="inner-row">
                        <form className="form-signup" noValidate onSubmit={this.onSubmit}>
                            <h1 className="form-header">Register</h1>
                            <div className="form-group">
                                <label className="label-text" htmlFor="name">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label-text" htmlFor="name">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label-text" htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label-text" htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label-text" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Register!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Usersignup;