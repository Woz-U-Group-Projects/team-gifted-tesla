import React, { Component } from 'react';
import axios from 'axios';

import Motherboards from "../components/datafetchers/Motherboards";
import MotherboardTitle from "../components/design/MotherboardTitle";
import Slideshow from "../components/slideshow/SlideMotherboard";

import { Container, Row, Col } from 'react-bootstrap';

import "./Home.css";


const Home = props => {
    return (
        <div className="grid-container">
            <MotherboardTitle />
            <Container>
                <Row>
                    <Col className="column-mobo1"><Slideshow /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;