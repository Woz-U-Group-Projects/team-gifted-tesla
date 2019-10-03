import React, { Component } from 'react';
import axios from 'axios';
import Motherboards from "../components/datafetchers/Motherboards";

import "./Home.css";

const Home = props => {
    return (
        <div className="grid-container">
            <div className='grid3-3'>
                <Motherboards uri="http://localhost:3000/motherboards/data" />
            </div>
        </div>
    )
}

export default Home;