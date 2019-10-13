import React from 'react';

import MotherboardTitle from "../components/design/MotherboardTitle";
import SlideshowMotherboard from "../components/slideshow/SlideMotherboard";
import SlideshowGraphic from "../components/slideshow/SlideGraphic";

import { Container, Row, Col } from 'react-bootstrap';

import "./Home.css";


const Home = props => {
    return (
        <div className="grid-container">
            {/*Needs New Method*/}
            <Container>
                <Row>
                    <Col className="column-mobo1"><SlideshowMotherboard /></Col>
                </Row>

            </Container>
        </div>
    )
}

export default Home;