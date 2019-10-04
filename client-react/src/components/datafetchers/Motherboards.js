import React from 'react';
import axios from 'axios';
import "./Motherboards.css";

import { Container, Col, Row } from 'react-bootstrap';

class Motherboards extends React.Component {
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
            <Col className="col-motherboard-1">
                <div className="gridRender-motherboard" key={motherboard.MotherboardId}>
                    <div className="inner-grid-motherboard"><strong>{motherboard.MotherboardName}</strong></div>
                    <div className="price-motherboard">${motherboard.MotherboardPrice}</div>
                    <div className="motherboard-center-button">
                        <button className="buy-button-motherboard">Buy Now</button>
                    </div>
                </div>
            </Col>
        ));
        return <Container><Row>{motherboards}</Row></Container>
    }
}

export default Motherboards