import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import "./Motherboardcard2Mobile.css";

class Motherboardcard2Mobile extends Component {
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
                <Card className="motherboard-2-container-mobile">
                    <CardImg top width="100%" className="motherboard-2-image-mobile" src="http://localhost:3000/assets/imagemobo2.jpg" alt="Card image cap" />
                    <CardBody className="motherboard-2-id-mobile" key={motherboard.MotherboardId}>
                        <CardTitle className="motherboard-2-name-mobile">{motherboard.MotherboardName}</CardTitle>
                        <CardText className="motherboard-2-price-mobile">${motherboard.MotherboardPrice}</CardText>
                        <button className="motherboard-2-button-mobile">Buy Now</button>
                    </CardBody>
                </Card>
            </div>
        ));
        return <Container><Row>{motherboards}</Row></Container>
    }
}

export default Motherboardcard2Mobile;