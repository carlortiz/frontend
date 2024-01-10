import React from 'react';
import Team from '../Team/Team.js';
import './Bracket.css';

const Bracket = ({position, team}) => {
  return (
    <div className="bracket">
      <p>Position: {position.x}, {position.y}</p>
      <p>Team: {team}</p>
    </div>
  );
}

export default Bracket;