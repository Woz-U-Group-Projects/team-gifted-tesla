import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./Graphiccard1Mobile.css";

class Graphiccard1Mobile extends Component {
    state = {
        graphicData: []
    };

    fetchGraphicData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    graphicData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchGraphicData();
    };

    render() {
        console.log(this.state.graphicData);
        if (this.state.graphicData.length === 0) {
            return <div>Failed to fetch data from server</div>;
        }

        const graphics = this.state.graphicData.map(graphic => (
            <div key={graphic.GraphicsId}>
                <Card className="graphic-1-container-mobile">
                    <CardImg top width="100%" className="graphic-1-image-mobile" src="http://localhost:3000/assets/imagemobo1.jpg" alt="Card image cap" />
                    <CardBody className="graphic-1-id-mobile" key={graphic.GraphicsId}>
                        <CardTitle className="graphic-1-name-mobile">{graphic.GraphicsName}</CardTitle>
                        <CardText className="graphic-1-price-mobile">${graphic.GraphicsPrice}</CardText>
                        <button className="graphic-1-button-mobile">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{graphics}</Row></Container>
    }
}

export default Graphiccard1Mobile;