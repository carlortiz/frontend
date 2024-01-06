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

// we only have the ravens logo for now, but we will add more teams later

export default Team;