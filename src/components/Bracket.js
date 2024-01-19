import React from 'react';
import '../App.css'
import bills_logo from '../assets/bills_logo.webp'
import steelers_logo from '../assets/steelers_logo.webp'
import browns_logo from '../assets/browns_logo.jpeg'
import buccaneers_logo from '../assets/buccaneers_logo.png'
import chiefs_logo from '../assets/chiefs_logo.webp'
import cowboys_logo from '../assets/cowboys_logo.webp'
import lions_logo from '../assets/lions_logo.jpeg'
import dolphins_logo from '../assets/dolphins_logo.webp'
import eagles_logo from '../assets/eagles_logo.webp'
import niners_logo from '../assets/niners_logo.avif'
import packers_logo from '../assets/packers_logo.jpeg'
import rams_logo from '../assets/rams_logo.png'
import texans_logo from '../assets/texans_logo.avif'
import ravens_logo from '../assets/ravens_logo.jpeg'
import superbowl_logo from '../assets/superbowl_lvii.png'
import afc_logo from '../assets/afc_logo.png'
import nfc_logo from '../assets/nfc_logo.png'

function Bracket(props) {
  const imageMap = {
    bills_logo: bills_logo,
    steelers_logo: steelers_logo,
    browns_logo: browns_logo,
  }

  return (
    <div className={props.seed}>
        <img src={imageMap[props.image]} className="team"></img>
    </div>
  );
}

export default Bracket;

