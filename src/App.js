import React from 'react';
import Bracket from './components/Bracket.js';
import superbowl_logo from './assets/superbowl_lvii.png'
import afc_logo from './assets/afc_logo.png'
import nfc_logo from './assets/nfc_logo.png'

function App() {
  return (
    <div>
      <img src={superbowl_logo} className='superbowl_logo' alt=""></img>
      <img src={afc_logo} className='afc_logo' alt=""></img>
      <img src={nfc_logo} className='nfc_logo' alt=""></img>

      <Bracket seed="bracket afc_wildcard_seed_1" image='bills_logo'/>
      <Bracket seed="bracket afc_wildcard_seed_2" image='steelers_logo'/>
      <Bracket seed="bracket afc_wildcard_seed_3" image='chiefs_logo'/>
      <Bracket seed="bracket afc_wildcard_seed_4" image='dolphins_logo'/>
      <Bracket seed="bracket afc_wildcard_seed_5" image='texans_logo'/>
      <Bracket seed="bracket afc_wildcard_seed_6" image='browns_logo'/>
      <Bracket seed="bracket afc_divisional_seed_1" image='ravens_logo'/>
      <Bracket seed="bracket afc_divisional_seed_2"/>
      <Bracket seed="bracket afc_divisional_seed_2"/>
      <Bracket seed="bracket afc_divisional_seed_3"/>
      <Bracket seed="bracket afc_divisional_seed_4"/>
      <Bracket seed="bracket afc_conference_seed_1"/>
      <Bracket seed="bracket afc_conference_seed_2"/>
      <Bracket seed="bracket afc_champion"/>

      <Bracket seed="bracket nfc_wildcard_seed_1" image='cowboys_logo'/>
      <Bracket seed="bracket nfc_wildcard_seed_2" image='packers_logo'/>
      <Bracket seed="bracket nfc_wildcard_seed_3" image='lions_logo'/>
      <Bracket seed="bracket nfc_wildcard_seed_4" image='rams_logo'/>
      <Bracket seed="bracket nfc_wildcard_seed_5" image='buccaneers_logo'/>
      <Bracket seed="bracket nfc_wildcard_seed_6" image='eagles_logo'/>
      <Bracket seed="bracket nfc_divisional_seed_1" image='niners_logo'/>
      <Bracket seed="bracket nfc_divisional_seed_2"/>
      <Bracket seed="bracket nfc_divisional_seed_3"/>
      <Bracket seed="bracket nfc_divisional_seed_4"/>
      <Bracket seed="bracket nfc_conference_seed_1"/>
      <Bracket seed="bracket nfc_conference_seed_2"/>
      <Bracket seed="bracket nfc_champion"/>

      <Bracket seed="bracket superbowl_champion"/>
    </div>
  );
}

export default App;