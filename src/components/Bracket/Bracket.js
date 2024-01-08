import React from 'react';
import Team from '../Team/Team.js';
import './Bracket.css';

const Bracket = () => {
    return (
      <div>
            <div className="bracket afc-wildcard">
                <div className="dolphins"></div>
                <div className="steelers"></div>

                <div className="chiefs"></div>
                <div className="bills"></div>

                <div className="texans"></div>
                <div className="browns"></div>
            </div>
        </div>
    );
}

export default Bracket;