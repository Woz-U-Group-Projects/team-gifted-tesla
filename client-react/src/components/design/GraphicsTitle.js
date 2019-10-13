import React, { Component } from 'react';
import "./GraphicTitle.css";

class GraphicTitle extends Component {
    render() {
        return (
            <div className="graphicTitle">
                <p className="graphic-title-text">Video Cards</p>
                <p className="graphic-special-text">Special Deals</p>
            </div>
        )
    }
}

export default GraphicTitle;