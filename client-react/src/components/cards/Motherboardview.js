import React, { Component } from 'react';
import "./Motherboardview.css";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Motherboardview extends Component {
    render() {
        return (
            <div className="view-card-container">
                <Card className="view-card-inner">
                    <button className="view-all-motherboard"><i className="fa fa-search"></i></button>
                    <CardBody className="view-motherboard-body">
                        <CardText className="view-motherboard-text">
                            View All
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Motherboardview;