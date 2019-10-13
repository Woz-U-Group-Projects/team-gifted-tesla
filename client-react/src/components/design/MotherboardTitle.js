import React, { Component } from 'react';
import "./MotherboardTitle.css";

class MotherboardTitle extends Component {
    render() {
        return (
            <div className="motherboardTitle">
                <p className="motherboard-title-text">Motherboards</p>
                <p className="motherboard-special-text">Special Deals</p>
            </div>
        )
    }
}

export default MotherboardTitle;