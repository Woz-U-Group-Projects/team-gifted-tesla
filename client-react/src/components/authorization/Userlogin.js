import React, { Component } from 'react'
import { login } from './UserFunctions'
import "./Userlogin.css";

class Userlogin extends Component {
    constructor() {
        super()
        this.state = {
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

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="inner-row">
                        <form className="form-login" noValidate onSubmit={this.onSubmit}>
                            <h1 className="form-header">Please sign in</h1>
                            <div className="form-group">
                                <label className="label-text" htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
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
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Sign in
              </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userlogin;