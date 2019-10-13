import React from 'react';
import "./ListGraphics";

import { Container, Row, Col } from 'react-bootstrap';

import Graphiccard1 from "../components/cards/Graphics/Graphiccard1";
import Graphiccard2 from "../components/cards/Graphics/Graphiccard2";
import Graphiccard3 from "../components/cards/Graphics/Graphiccard3";
import Graphiccard4 from "../components/cards/Graphics/Graphiccard4";
import Graphiccard5 from "../components/cards/Graphics/Graphiccard5";
import Graphiccard6 from "../components/cards/Graphics/Graphiccard6";
import Graphiccard7 from "../components/cards/Graphics/Graphiccard7";
import Graphiccard8 from "../components/cards/Graphics/Graphiccard8";

const ListGraphics = props => {
    return (
        <Container>
            <Row>
                <Col><Graphiccard1 uri="http://localhost:3000/graphics/data1" /></Col>
                <Col><Graphiccard2 uri="http://localhost:3000/graphics/data2" /></Col>
                <Col><Graphiccard3 uri="http://localhost:3000/graphics/data3" /></Col>
            </Row>
            <Row>
                <Col><Graphiccard4 uri="http://localhost:3000/graphics/data4" /></Col>
                <Col><Graphiccard5 uri="http://localhost:3000/graphics/data5" /></Col>
                <Col><Graphiccard6 uri="http://localhost:3000/graphics/data6" /></Col>
            </Row>
            <Row>
                <Col><Graphiccard7 uri="http://localhost:3000/graphics/data7" /></Col>
                <Col><Graphiccard8 uri="http://localhost:3000/graphics/data8" /></Col>
            </Row>
            <Row>
                <Col>
                    <div className="spacer">

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ListGraphics;