import React from 'react';
import './Team.css';
import ravens_logo from '../../assets/ravens_logo.jpeg';

const Team = () => {
    return (
        <div>
            <img src={ravens_logo} alt="Ravens Logo" className="team" />
        </div>
    );
}


export default Team;