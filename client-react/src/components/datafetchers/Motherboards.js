import React from 'react';
import axios from 'axios';
import "./Motherboards.css";

const slideImages = [
    '../assets/13-119-152-VO1.jpg',
    '../assets/13-119-204-VO1.jpg',
    '../assets/13-144-219-VO1.jpg'
  ];

class Motherboards extends React.Component {
    state = {
        motherboardData: []
    };

    fetchMotherboardData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    motherboardData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchMotherboardData();
    };

    render() {
        console.log(this.state.motherboardData);
        if (this.state.motherboardData.length === 0) {
            return <div>Failed to fetch data from server</div>;
        }

        const motherboards = this.state.motherboardData.map(motherboard => (
            <div className="rowMotherboard">
                <div className="gridRender-motherboard" key={motherboard.MotherboardId}>
                    <div className="inner-grid-motherboard">{motherboard.MotherboardName}</div>
                    <div className="image-motherboard"></div>
                    <div className="price-motherboard">${motherboard.MotherboardPrice}</div>
                    <div className="motherboard-center-button">
                        <button className="buy-button-motherboard">Buy Now</button>
                    </div>
                </div>
            </div>
        ));
        return <div>{motherboards}</div>
    }
}

export default Motherboards