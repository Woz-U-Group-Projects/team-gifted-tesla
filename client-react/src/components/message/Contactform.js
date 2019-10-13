import React, { Component } from 'react';
import "./Contactform.css";

class Contactform extends Component {
    render() {
        return (
            <div className="contact-container">

                <div className="inner-row">
                    <form className="form-contact">
                        <h1 className="form-header">Contact us!</h1>
                        <div className="form-group">
                            <label className="label-text" htmlFor="name">First name</label>
                            <input className="form-control" name="firstName" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label className="label-text" htmlFor="name">Last name</label>
                            <input className="form-control" name="lastName" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label className="label-text" htmlFor="name">Message</label>
                            <br />
                            <textarea className="messagebox" name="message" row="5" cols="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Submit Message</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Contactform;