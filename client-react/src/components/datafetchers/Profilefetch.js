import React from 'react';
import axios from 'axios';

class Profilefetch extends React.Component {
    state = {
        profileData: []
    };

    fetchProfileData = () => {
        const profile = axios.create({
            withCredentials: true
        });
        var encodedURI = window.encodeURI(this.props.uri);
        return profile.get('http://localhost:3000/users/profile').then(response => {
            this.setState(() => {
                return {
                    profileData: [response.data]
                };
            });
        });
    };

    componentDidMount() {
        this.fetchProfileData();
    };

    render() {
        console.log(this.state.profileData[0]);
        if (this.state.profileData.length === 0) {
            return <div>Failed to fetch data from server</div>;
        }

        const profiles = this.state.profileData.map(profile => (
            <div className="">
                <div className="" key={profile.UserId}>
                    <div className="">{profile.FirstName}</div>
                    <div className="">{profile.LastName}</div>
                </div>
            </div>
        ));
        return <div>{profiles}</div>
    }
}

export default Profilefetch;