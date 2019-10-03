import React from 'react';
import Profilefetch from '../components/datafetchers/Profilefetch';

const UserProfile = props => {
    return (
        <div className="grid-container">
            <div className='grid3-3'>
                <Profilefetch uri="http://localhost:3000/users/profile" />
            </div>
        </div>
    )
}

export default UserProfile;