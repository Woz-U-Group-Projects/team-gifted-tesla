import React, { Component } from 'react';
import "./ListMotherboards.css";

import { Container, Row, Col } from 'react-bootstrap';

import Motherboardcard1 from "../components/cards/Motherboardcard1";
import Motherboardcard2 from "../components/cards/Motherboardcard2";
import Motherboardcard3 from "../components/cards/Motherboardcard3";
import Motherboardcard4 from "../components/cards/Motherboardcard4";
import Motherboardcard5 from "../components/cards/Motherboardcard5";
import Motherboardcard6 from "../components/cards/Motherboardcard6";
import Motherboardcard7 from "../components/cards/Motherboardcard7";
import Motherboardcard8 from "../components/cards/Motherboardcard8";

const ListMotherboards = props => {
    return (
        <Container>
            <Row>
                <Col><Motherboardcard1 uri="http://localhost:3000/motherboards/data1" /></Col>
                <Col><Motherboardcard2 uri="http://localhost:3000/motherboards/data2" /></Col>
                <Col><Motherboardcard3 uri="http://localhost:3000/motherboards/data3" /></Col>
            </Row>
            <Row>
                <Col><Motherboardcard4 uri="http://localhost:3000/motherboards/data4" /></Col>
                <Col><Motherboardcard5 uri="http://localhost:3000/motherboards/data5" /></Col>
                <Col><Motherboardcard6 uri="http://localhost:3000/motherboards/data6" /></Col>
            </Row>
            <Row>
                <Col><Motherboardcard7 uri="http://localhost:3000/motherboards/data7" /></Col>
                <Col><Motherboardcard8 uri="http://localhost:3000/motherboards/data8" /></Col>
            </Row>
            <Row>
                <Col>
                    <div className="spacer"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default ListMotherboards;