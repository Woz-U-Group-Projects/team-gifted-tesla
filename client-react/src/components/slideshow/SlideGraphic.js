import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SlideGraphic.css";


import Graphiccard1 from "../cards/Graphics/Graphiccard1";
import Graphiccard2 from "../cards/Graphics/Graphiccard2";
import Graphiccard3 from "../cards/Graphics/Graphiccard3";
import Graphiccard4 from "../cards/Graphics/Graphiccard4";
import Graphiccard5 from "../cards/Graphics/Graphiccard5";
import Graphiccard6 from "../cards/Graphics/Graphiccard6";
import Graphiccard7 from "../cards/Graphics/Graphiccard7";
import Graphiccard8 from "../cards/Graphics/Graphiccard8";
import SlideshowGraphicMobile from "../slideshow/SlideMotherboardMobile";
import Graphicview from "../cards/Graphics/Graphicview";



export default class SlideshowGraphic extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            accessibility: true
        };
        return (
            <div className="g-slider-container-main">
                <Slider className="g-slider-component" {...settings}>
                    <div className="g-each-div">
                        <Graphiccard1 uri="http://localhost:3000/graphics/data1" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard2 uri="http://localhost:3000/graphics/data2" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard3 uri="http://localhost:3000/graphics/data3" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard4 uri="http://localhost:3000/graphics/data4" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard5 uri="http://localhost:3000/graphics/data5" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard6 uri="http://localhost:3000/graphics/data6" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard7 uri="http://localhost:3000/graphics/data7" />
                    </div>
                    <div className="g-each-div">
                        <Graphiccard8 uri="http://localhost:3000/graphics/data8" />
                    </div>
                    <div className="g-each-div">
                        <Graphicview />
                    </div>
                </Slider>
                <SlideshowGraphicMobile className="test" />
            </div>
        );
    }
}