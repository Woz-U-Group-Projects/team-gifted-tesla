import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./ViewMotherboardcard3.css";

class ViewMotherboardcard3 extends Component {
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
            <div key={motherboard.MotherboardId}>
                <Card className="view-motherboard-3-container">
                    <CardImg top width="100%" className="view-motherboard-3-image" src="http://localhost:3000/assets/imagemobo3.jpg" alt="Card image cap" />
                    <CardBody className="view-motherboard-3-id" key={motherboard.MotherboardId}>
                        <CardTitle className="view-motherboard-3-name">{motherboard.MotherboardName}</CardTitle>
                        <CardText className="view-motherboard-3-price">${motherboard.MotherboardPrice}</CardText>
                        <button className="view-motherboard-3-button">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{motherboards}</Row></Container>
    }
}

export default ViewMotherboardcard3;