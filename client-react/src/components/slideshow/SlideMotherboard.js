import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SlideMotherboard.css";

import Motherboardcard1 from "../cards/Motherboards/Motherboardcard1";
import Motherboardcard2 from "../cards/Motherboards/Motherboardcard2";
import Motherboardcard3 from "../cards/Motherboards/Motherboardcard3";
import Motherboardcard4 from "../cards/Motherboards/Motherboardcard4";
import Motherboardcard5 from "../cards/Motherboards/Motherboardcard5";
import Motherboardcard6 from "../cards/Motherboards/Motherboardcard6";
import Motherboardcard7 from "../cards/Motherboards/Motherboardcard7";
import Motherboardcard8 from "../cards/Motherboards/Motherboardcard8";
import Motherboardcard9 from "../cards/Motherboards/Motherboardcard9";
import SlideshowMotherboardMobile from "./SlideMotherboardMobile";



export default class SlideshowMotherboard extends Component {
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
      <div className="slider-container-main">
        <Slider className="slider-component" {...settings}>
          <div className="each-div">
            <Motherboardcard1 uri="http://localhost:3000/motherboards/data1" />
          </div>
          <div className="each-div">
            <Motherboardcard2 uri="http://localhost:3000/motherboards/data2" />
          </div>
          <div className="each-div">
            <Motherboardcard3 uri="http://localhost:3000/motherboards/data3" />
          </div>
          <div className="each-div">
            <Motherboardcard4 uri="http://localhost:3000/motherboards/data4" />
          </div>
          <div className="each-div">
            <Motherboardcard5 uri="http://localhost:3000/motherboards/data5" />
          </div>
          <div className="each-div">
            <Motherboardcard6 uri="http://localhost:3000/motherboards/data6" />
          </div>
          <div className="each-div">
            <Motherboardcard7 uri="http://localhost:3000/motherboards/data7" />
          </div>
          <div className="each-div">
            <Motherboardcard8 uri="http://localhost:3000/motherboards/data8" />
          </div>
          <div className="each-div">
            <Motherboardcard9 uri="http://localhost:3000/motherboards/data9" />
          </div>
        </Slider>
        <SlideshowMotherboardMobile className="test" />
      </div>
    );
  }
}