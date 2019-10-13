import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./ViewMotherboardcard7.css";

class ViewMotherboardcard7 extends Component {
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
                <Card className="view-motherboard-7-container">
                    <CardImg top width="100%" className="view-motherboard-7-image" src="http://localhost:3000/assets/imagemobo7.jpg" alt="Card image cap" />
                    <CardBody className="view-motherboard-7-id" key={motherboard.MotherboardId}>
                        <CardTitle className="view-motherboard-7-name">{motherboard.MotherboardName}</CardTitle>
                        <CardText className="view-motherboard-7-price">${motherboard.MotherboardPrice}</CardText>
                        <button className="view-motherboard-7-button">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{motherboards}</Row></Container>
    }
}

export default ViewMotherboardcard7;