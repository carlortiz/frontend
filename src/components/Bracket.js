import React from 'react';
import './Bracket.css';

function Bracket() {
    return (
      <div>
            <div className="bracket">
                <div className="matchup">
                    <div className="team">
                        <div className="team">Team 1</div>
                        <div className="team">Team 2</div>
                    </div>
                    <div className="team">
                        <div className="team">Team 3</div>
                        <div className="team">Team 4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bracket;