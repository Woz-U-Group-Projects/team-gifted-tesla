import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SlideMotherboardMobile.css";

import Motherboardcard1Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard1Mobile";
import Motherboardcard2Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard2Mobile";
import Motherboardcard3Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard3Mobile";
import Motherboardcard4Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard4Mobile";
import Motherboardcard5Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard5Mobile";
import Motherboardcard6Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard6Mobile";
import Motherboardcard7Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard7Mobile";
import Motherboardcard8Mobile from "../cardsMobile/MotherboardMobile/Motherboardcard8Mobile";
import MotherboardviewMobile from "../cardsMobile/MotherboardMobile/MotherboardviewMobile";


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
            <Motherboardcard1Mobile uri="http://localhost:3000/motherboards/data1" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard2Mobile uri="http://localhost:3000/motherboards/data2" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard3Mobile uri="http://localhost:3000/motherboards/data3" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard4Mobile uri="http://localhost:3000/motherboards/data4" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard5Mobile uri="http://localhost:3000/motherboards/data5" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard6Mobile uri="http://localhost:3000/motherboards/data6" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard7Mobile uri="http://localhost:3000/motherboards/data7" />
          </div>
          <div className="each-div-mobile">
            <Motherboardcard8Mobile uri="http://localhost:3000/motherboards/data8" />
          </div>
          <div className="each-div-mobile">
            <MotherboardviewMobile />
          </div>
        </Slider>
      </div>
    );
  }
}