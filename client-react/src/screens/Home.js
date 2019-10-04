import React, { Component } from 'react';
import axios from 'axios';
import Motherboards from "../components/datafetchers/Motherboards";
import Motherboardcard1 from "../components/cards/Motherboardcard1";
import Motherboardcard2 from "../components/cards/Motherboardcard2";
import Motherboardcard3 from "../components/cards/Motherboardcard3";
import MotherboardTitle from "../components/design/MotherboardTitle";

import { Container, Row, Col } from 'react-bootstrap';

import "./Home.css";


const Home = props => {
    return (
        <div className="grid-container">
            <MotherboardTitle />
            <Container>
                <Row>
                    <Col className="column-mobo1"><Motherboardcard1 uri="http://localhost:3000/motherboards/data1" /></Col>
                    <Col className="column-mobo2"><Motherboardcard2 uri="http://localhost:3000/motherboards/data2" /></Col>
                    <Col className="column-mobo3"><Motherboardcard3 uri="http://localhost:3000/motherboards/data3" /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;