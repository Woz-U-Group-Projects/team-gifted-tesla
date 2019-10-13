import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SlideGraphicMobile.css";



export default class SlideshowMobile extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true
        };
        return (
            <div className="slider-container-main-mobile">
                <Slider className="slider-component-mobile" {...settings}>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">

                    </div>
                    <div className="each-div-mobile">
                        <MotherboardviewMobile />
                    </div>
                </Slider>
            </div>
        );
    }
}