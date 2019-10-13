import React, { Component } from 'react';
import "./MotherboardviewMobile.css";

import { Card, CardText, CardBody } from 'reactstrap';

class GraphicviewMobile extends Component {
    render() {
        return (
            <div className="view-card-container-mobile">
                <Card className="view-card-inner-mobile">
                    <button className="view-all-graphics-mobile"><i className="fa fa-search"></i></button>
                    <CardBody className="view-graphics-body-mobile">
                        <CardText className="view-graphics-text-mobile">
                            View All
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default GraphicviewMobile;