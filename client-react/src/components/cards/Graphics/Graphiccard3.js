import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./Graphiccard3.css";

class Graphiccard3 extends Component {
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
                <Card className="graphic-3-container">
                    <CardImg top width="100%" className="graphic-3-image" src="http://localhost:3000/assets/imagegraphic3.jpg" alt="Card image cap" />
                    <CardBody className="graphic-3-id" key={graphic.GraphicsId}>
                        <CardTitle className="graphic-3-name">{graphic.GraphicsName}</CardTitle>
                        <CardText className="graphic-3-price">${graphic.GraphicsPrice}</CardText>
                        <button className="graphic-3-button">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{graphics}</Row></Container>
    }
}

export default Graphiccard3;