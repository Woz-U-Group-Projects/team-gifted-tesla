import React, { Component } from 'react';
import axios from 'axios';

import Userlogin from "../components/authorization/Usersignup"
import Usersignup from "../components/authorization/Userlogin"

import Tabs from "../components/tabs/Tabs";
require('../components/tabs/style.css');

class Authenticate extends Component {
    render() {
        return (
            <div className="tab-container-outter">
                <div className="tab-container">
                    <Tabs>
                        <div label="Login">
                            <Usersignup />
                        </div>
                        <div label="Signup">
                            <Userlogin />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Authenticate;