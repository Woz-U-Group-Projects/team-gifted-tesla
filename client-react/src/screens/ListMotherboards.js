import React from 'react';
import "./ListMotherboards.css";

import { Container, Row, Col } from 'react-bootstrap';

import ViewMotherboardcard1 from "../components/viewallMotherboards/ViewMotherboardcard1"
import ViewMotherboardcard2 from "../components/viewallMotherboards/ViewMotherboardcard2"
import ViewMotherboardcard3 from "../components/viewallMotherboards/ViewMotherboardcard3"
import ViewMotherboardcard4 from "../components/viewallMotherboards/ViewMotherboardcard4"
import ViewMotherboardcard5 from "../components/viewallMotherboards/ViewMotherboardcard5"
import ViewMotherboardcard6 from "../components/viewallMotherboards/ViewMotherboardcard6"
import ViewMotherboardcard7 from "../components/viewallMotherboards/ViewMotherboardcard7"
import ViewMotherboardcard8 from "../components/viewallMotherboards/ViewMotherboardcard8"
import ViewMotherboardcard9 from "../components/viewallMotherboards/ViewMotherboardcard9"

const ListMotherboards = props => {
    return (
        <Container className="container">
            <h3 className="list-header-title">Motherboards</h3>
            <Row>
                <div className="col-test"><Col><ViewMotherboardcard1 uri="http://localhost:3000/motherboards/data1" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard2 uri="http://localhost:3000/motherboards/data2" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard3 uri="http://localhost:3000/motherboards/data3" /></Col></div>
            </Row>
            <Row>
                <div className="col-test"><Col><ViewMotherboardcard4 uri="http://localhost:3000/motherboards/data4" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard5 uri="http://localhost:3000/motherboards/data5" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard6 uri="http://localhost:3000/motherboards/data6" /></Col></div>
            </Row>
            <Row>
                <div className="col-test"><Col><ViewMotherboardcard7 uri="http://localhost:3000/motherboards/data7" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard8 uri="http://localhost:3000/motherboards/data8" /></Col></div>
                <div className="col-test"><Col><ViewMotherboardcard9 uri="http://localhost:3000/motherboards/data9" /></Col></div>
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