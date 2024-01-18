import React from 'react';
import './App.css'
import bills_logo from './assets/bills_logo.webp'
import steelers_logo from './assets/steelers_logo.webp'
import browns_logo from './assets/browns_logo.jpeg'
import buccaneers_logo from './assets/buccaneers_logo.png'
import chiefs_logo from './assets/chiefs_logo.webp'
import cowboys_logo from './assets/cowboys_logo.webp'
import lions_logo from './assets/lions_logo.jpeg'
import dolphins_logo from './assets/dolphins_logo.webp'
import eagles_logo from './assets/eagles_logo.webp'
import niners_logo from './assets/niners_logo.avif'
import packers_logo from './assets/packers_logo.jpeg'
import rams_logo from './assets/rams_logo.png'
import texans_logo from './assets/texans_logo.avif'
import ravens_logo from './assets/ravens_logo.jpeg'
import superbowl_logo from './assets/superbowl_lvii.png'
import afc_logo from './assets/afc_logo.png'
import nfc_logo from './assets/nfc_logo.png'

function App() {

  const getTeamImage = (bracket) => {
    const imageTag = bracket.querySelector('.team');
    const imageClone = imageTag.cloneNode(true);
    return imageClone;
  }
  
  const advanceTeam = (newBracket, image) => {
    if (!(newBracket[0].querySelector('img')))
      newBracket[0].appendChild(image);
  }

  const handleWildCardClick = (event) => {
    const clickedBracket = event.currentTarget;
    let teamImage = getTeamImage(clickedBracket);

    if (clickedBracket.className.includes("afc_wildcard_seed_1") || 
        clickedBracket.className.includes("afc_wildcard_seed_3"))
    {
      let newBracket = document.getElementsByClassName('afc_divisional_seed_3');
      if (newBracket[0].querySelector('img')) 
        newBracket = document.getElementsByClassName('afc_divisional_seed_4');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_wildcard_seed_2"))
    {
      let newBracket = document.getElementsByClassName('afc_divisional_seed_2');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_wildcard_seed_5") || 
        clickedBracket.className.includes("afc_wildcard_seed_6"))
    {
      let newBracket = document.getElementsByClassName('afc_divisional_seed_2');
      if (newBracket[0].querySelector('img'))
        newBracket = document.getElementsByClassName('afc_divisional_seed_4');
        advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_wildcard_seed_4"))
    {
      let newBracket = document.getElementsByClassName('afc_divisional_seed_2');
      advanceTeam(newBracket, teamImage);
    }
    
    if (clickedBracket.className.includes("nfc_wildcard_seed_1") || 
        clickedBracket.className.includes("nfc_wildcard_seed_3"))
    {
      let newBracket = document.getElementsByClassName('nfc_divisional_seed_3');
      if (newBracket[0].querySelector('img')) 
        newBracket = document.getElementsByClassName('nfc_divisional_seed_4');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_wildcard_seed_2"))
    {
      let newBracket = document.getElementsByClassName('nfc_divisional_seed_2');
      advanceTeam(newBracket, teamImage);
    }
    
    if (clickedBracket.className.includes("nfc_wildcard_seed_5") || 
        clickedBracket.className.includes("nfc_wildcard_seed_6"))
    {
      let newBracket = document.getElementsByClassName('nfc_divisional_seed_2');
      if (newBracket[0].querySelector('img'))
        newBracket = document.getElementsByClassName('nfc_divisional_seed_4');
        advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_wildcard_seed_4"))
    {
      let newBracket = document.getElementsByClassName('nfc_divisional_seed_2');
      advanceTeam(newBracket, teamImage);
    }
  };

  const handleNonWildCardClick = (event) => {
    const clickedBracket = event.currentTarget;
    let teamImage = getTeamImage(clickedBracket);

    // WORK ON THIS BELOW.
    // declare a variable for current and new seed and create the logic from there.
    // then, you only have to getNewBracket once and advanceteam once.

    if (clickedBracket.className.includes("afc_divisional_seed_1"))
    {
      let newBracket = document.getElementsByClassName('afc_conference_seed_1');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_divisional_seed_2"))
    {
      let newBracket = document.getElementsByClassName('afc_conference_seed_1');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_divisional_seed_3"))
    {
      let newBracket = document.getElementsByClassName('afc_conference_seed_2');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_divisional_seed_4"))
    {
      let newBracket = document.getElementsByClassName('afc_conference_seed_2');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_divisional_seed_1"))
    {
      let newBracket = document.getElementsByClassName('nfc_conference_seed_1');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_divisional_seed_2"))
    {
      let newBracket = document.getElementsByClassName('nfc_conference_seed_1');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_divisional_seed_3"))
    {
      let newBracket = document.getElementsByClassName('nfc_conference_seed_2');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_divisional_seed_4"))
    {
      let newBracket = document.getElementsByClassName('nfc_conference_seed_2');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_conference_seed_1") ||
        clickedBracket.className.includes("afc_conference_seed_2"))
    {
      let newBracket = document.getElementsByClassName('afc_champion');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("nfc_conference_seed_1") ||
        clickedBracket.className.includes("nfc_conference_seed_2"))
    {
      let newBracket = document.getElementsByClassName('nfc_champion');
      advanceTeam(newBracket, teamImage);
    }

    if (clickedBracket.className.includes("afc_champion") ||
        clickedBracket.className.includes("nfc_champion"))
    {
      let newBracket = document.getElementsByClassName('superbowl_champion');
      teamImage.classList.add('team_champion');
      advanceTeam(newBracket, teamImage);
    }
  };

  return (
    <div>
      <img src={superbowl_logo} className='superbowl_logo'></img>
      <img src={afc_logo} className='afc_logo'></img>
      <img src={nfc_logo} className='nfc_logo'></img>

      <div className="bracket afc_wildcard_seed_1" onClick={handleWildCardClick}>
        <img src={bills_logo} className="team"></img>
      </div>

      <div className="bracket afc_wildcard_seed_2" onClick={handleWildCardClick}>
        <img src={steelers_logo} className="team"></img>
      </div>

      <div className="bracket afc_wildcard_seed_3" onClick={handleWildCardClick}>
        <img src={chiefs_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_4" onClick={handleWildCardClick}>
        <img src={dolphins_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_5" onClick={handleWildCardClick}>
        <img src={texans_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_6" onClick={handleWildCardClick}>
        <img src={browns_logo} className='team'></img>
      </div>

      <div className="bracket afc_divisional_seed_1" onClick={handleNonWildCardClick}>
        <img src={ravens_logo} className='team'></img>
      </div>

      <div className="bracket afc_divisional_seed_2" onClick={handleNonWildCardClick}></div>
      <div className="bracket afc_divisional_seed_3" onClick={handleNonWildCardClick}></div>
      <div className="bracket afc_divisional_seed_4" onClick={handleNonWildCardClick}></div>

      <div className="bracket afc_conference_seed_1" onClick={handleNonWildCardClick}></div>
      <div className="bracket afc_conference_seed_2" onClick={handleNonWildCardClick}></div>

      <div className="bracket afc_champion" onClick={handleNonWildCardClick}></div>

      <div className="bracket nfc_wildcard_seed_1" onClick={handleWildCardClick}>
        <img src={cowboys_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_2" onClick={handleWildCardClick}>
        <img src={packers_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_3" onClick={handleWildCardClick}>
        <img src={lions_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_4" onClick={handleWildCardClick}>
        <img src={rams_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_5" onClick={handleWildCardClick}>
        <img src={buccaneers_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_6" onClick={handleWildCardClick}>
        <img src={eagles_logo} className='team'></img>
      </div>

      <div className="bracket nfc_divisional_seed_1" onClick={handleNonWildCardClick}>
        <img src={niners_logo} className='team'></img>
      </div>

      <div className="bracket nfc_divisional_seed_2" onClick={handleNonWildCardClick}></div>
      <div className="bracket nfc_divisional_seed_3" onClick={handleNonWildCardClick}></div>
      <div className="bracket nfc_divisional_seed_4" onClick={handleNonWildCardClick}></div>

      <div className="bracket nfc_conference_seed_1" onClick={handleNonWildCardClick}></div>
      <div className="bracket nfc_conference_seed_2" onClick={handleNonWildCardClick}></div>

      <div className="bracket nfc_champion" onClick={handleNonWildCardClick}></div>

      <div className="bracket superbowl_champion"></div>
    </div>
  );
}

export default App;