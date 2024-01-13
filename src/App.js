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
  const handleBracketClick = (event) => {

    //   special case: wildcard round matchup
    //   we need all three winners
    //     the lowest goes against the bye team
    //     the other two go head to head, matching the bracket flow

    const clickedBracket = event.currentTarget;

    if (clickedBracket.className.includes("wildcard")) {
      
    } else {
      const imgTag = clickedBracket.querySelector('.team');
      const imgClone = imgTag.cloneNode(true);
      const newBracket = document.getElementsByClassName('afc_conference_seed_1');
      console.log(newBracket[0]);
      newBracket[0].appendChild(imgClone);

      // think carefully about the test cases and logic. division_seed_1 and 2 should only go to afc_1. 
      // implement logic to account for every test case.
    }

  };

  return (
    <div>
      <div className="bracket afc_wildcard_seed_2" onClick={handleBracketClick}>
        <img src={bills_logo} className="team"></img>
      </div>

      <div className="bracket afc_wildcard_seed_7" onClick={handleBracketClick}>
        <img src={steelers_logo} className="team"></img>
      </div>

      <div className="bracket afc_wildcard_seed_3">
        <img src={chiefs_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_6">
        <img src={dolphins_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_4">
        <img src={texans_logo} className='team'></img>
      </div>

      <div className="bracket afc_wildcard_seed_5">
        <img src={browns_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_2">
        <img src={cowboys_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_7">
        <img src={packers_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_3">
        <img src={lions_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_6">
        <img src={rams_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_4">
        <img src={buccaneers_logo} className='team'></img>
      </div>

      <div className="bracket nfc_wildcard_seed_5">
        <img src={eagles_logo} className='team'></img>
      </div>

      <div className="bracket afc_divisional_seed_1" onClick={handleBracketClick}>
        <img src={ravens_logo} className='team'></img>
      </div>

      <div className="bracket afc_divisional_seed_2"></div>
      <div className="bracket afc_divisional_seed_3"></div>
      <div className="bracket afc_divisional_seed_4"></div>

      <div className="bracket nfc_divisional_seed_1">
        <img src={niners_logo} className='team'></img>
      </div>

      <div className="bracket nfc_divisional_seed_2"></div>
      <div className="bracket nfc_divisional_seed_3"></div>
      <div className="bracket nfc_divisional_seed_4"></div>

      <div className="bracket afc_conference_seed_1"></div>
      <div className="bracket afc_conference_seed_2"></div>
      <div className="bracket nfc_conference_seed_1"></div>
      <div className="bracket nfc_conference_seed_2"></div>

      <div className="bracket afc_champion"></div>
      <div className="bracket nfc_champion"></div>
      <div className="bracket super_bowl_champion"></div>

      <img src={superbowl_logo} className='super_bowl_logo'></img>
      <img src={afc_logo} className='afc_logo'></img>
      <img src={nfc_logo} className='nfc_logo'></img>
    </div>
  );
}

export default App;