import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./Motherboardcard2.css";

class Motherboardcard2 extends Component {
    state = {
        motherboardData: []
    };

    fetchMotherboardData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    motherboardData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchMotherboardData();
    };

    render() {
        console.log(this.state.motherboardData);
        if (this.state.motherboardData.length === 0) {
            return <div>Failed to fetch data from server</div>;
        }

        const motherboards = this.state.motherboardData.map(motherboard => (
            <div>
                <Card className="motherboard-2-container">
                    <CardImg top width="100%" className="motherboard-2-image" src="http://localhost:3000/assets/imagemobo2.jpg" alt="Card image cap" />
                    <CardBody className="motherboard-2-id" key={motherboard.MotherboardId}>
                        <CardTitle className="motherboard-2-name">{motherboard.MotherboardName}</CardTitle>
                        <CardText className="motherboard-2-price">${motherboard.MotherboardPrice}</CardText>
                        <button className="motherboard-2-button">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{motherboards}</Row></Container>
    }
}

export default Motherboardcard2;