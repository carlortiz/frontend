import React from 'react';
import './Team.css';
import ravens_logo from '../../assets/ravens_logo.jpeg';

const Team = (team) => {
  return (
    <div>
      <img src={ravens_logo} alt="Ravens Logo" className="team" />
      // must import every logo from assets
      // must use team parameter to get correct logo
    </div>
  );
}


export default Team;