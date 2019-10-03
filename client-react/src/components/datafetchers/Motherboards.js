import React from 'react';
import axios from 'axios';

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
            <div key={motherboard.MotherboardId}>
                <em>{motherboard.MotherboardName}</em>: {motherboard.MotherboardPrice}
            </div>
        ));
        return <div>{motherboards}</div>
    }
}

export default Motherboards