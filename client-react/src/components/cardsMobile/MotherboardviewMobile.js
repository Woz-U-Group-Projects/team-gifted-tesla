import React, { Component } from 'react';
import "./MotherboardviewMobile.css";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class MotherboardviewMobile extends Component {
    render() {
        return (
            <div className="view-card-container-mobile">
                <Card className="view-card-inner-mobile">
                    <button className="view-all-motherboard-mobile"><i className="fa fa-search"></i></button>
                    <CardBody className="view-motherboard-body-mobile">
                        <CardText className="view-motherboard-text-mobile">
                            View All
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default MotherboardviewMobile;