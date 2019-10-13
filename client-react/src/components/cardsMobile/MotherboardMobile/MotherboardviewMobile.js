import React, { Component } from 'react';
import "./MotherboardviewMobile.css";

import { Card, CardText, CardBody } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MotherboardviewMobile extends Component {
    render() {
        return (
            <div className="view-card-container-mobile">
                <Card className="view-card-inner-mobile">
                    <button className="view-all-motherboard-mobile"><i className="fa fa-search"></i></button>
                    <CardBody className="view-motherboard-body-mobile">
                        <CardText className="view-motherboard-text-mobile">
                            <Link className="view-all-link" to="/motherboards">View All</Link>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MotherboardviewMobile;