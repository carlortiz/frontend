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

function Bracket(props) {
  const imageMap = {
    bills_logo: bills_logo,
    steelers_logo: steelers_logo,
    browns_logo: browns_logo,
    buccaneers_logo: buccaneers_logo,
    chiefs_logo: chiefs_logo,
    cowboys_logo: cowboys_logo,
    lions_logo: lions_logo,
    dolphins_logo: dolphins_logo,
    eagles_logo: eagles_logo,
    niners_logo: niners_logo,
    packers_logo: packers_logo,
    rams_logo: rams_logo,
    texans_logo: texans_logo,
    ravens_logo: ravens_logo,
  }
  
  const imageURL = imageMap[props.image];

  const handleClick = () => {
    let newSeed;
    let imageTag;
    let newBracket;
    
    if (props.seed.includes("afc_divisional_seed_1"))
      newSeed = "bracket afc_conference_seed_1";
    if (props.seed.includes("afc_divisional_seed_2"))
      newSeed = "bracket afc_conference_seed_1";
    if (props.seed.includes("afc_divisional_seed_3"))
      newSeed = "bracket afc_conference_seed_2";
    if (props.seed.includes("afc_divisional_seed_4"))
      newSeed = "bracket afc_conference_seed_2";
    if (props.seed.includes("afc_conference_seed_1"))
      newSeed = "bracket afc_champion";
    if (props.seed.includes("afc_conference_seed_2"))
      newSeed = "bracket afc_champion";
    if (props.seed.includes("afc_champion"))
      newSeed = "bracket superbowl_champion";

    if (props.seed.includes("nfc_divisional_seed_1"))
      newSeed = "bracket nfc_conference_seed_1";
    if (props.seed.includes("nfc_divisional_seed_2"))
      newSeed = "bracket nfc_conference_seed_1";
    if (props.seed.includes("nfc_divisional_seed_3"))
      newSeed = "bracket nfc_conference_seed_2";
    if (props.seed.includes("nfc_divisional_seed_4"))
      newSeed = "bracket nfc_conference_seed_2";
    if (props.seed.includes("nfc_conference_seed_1"))
      newSeed = "bracket nfc_champion";
    if (props.seed.includes("nfc_conference_seed_2"))
      newSeed = "bracket nfc_champion";
    if (props.seed.includes("nfc_champion"))
      newSeed = "bracket superbowl_champion";

    if (props.seed.includes("afc_wildcard_seed_1") || 
        props.seed.includes("afc_wildcard_seed_3"))
    {
      newSeed = "afc_divisional_seed_3";
      newBracket = document.getElementsByClassName(newSeed);
      if (newBracket[0].querySelector('img')) 
        newSeed = "afc_divisional_seed_4";
    }

    // if we click on a bracket that did not originally have an image
    if (!(imageURL)){
      const clickedBracket = document.getElementsByClassName(props.seed);
      const currentImage = clickedBracket[0].querySelector('img');
      const imageClone = currentImage.cloneNode(true);
      imageTag = imageClone;
    } else {
      imageTag = document.createElement('img')
      imageTag.src = imageURL;
      imageTag.className = "team";
      imageTag.alt = "";
    }

    // if we click on the afc_champion or nfc_champion bracket
    if (newSeed.includes("bracket superbowl_champion"))
      imageTag.classList.add('team_champion');

    // get the new bracket by seed
    newBracket = document.getElementsByClassName(newSeed);

    // if the new bracket does not already have an image
    if (!(newBracket[0].querySelector('img')))
      newBracket[0].appendChild(imageTag);
  };

  return (
    <div>
      <div className={props.seed} onClick={handleClick}>
        {imageURL && <img src={imageURL} className="team" alt="" />}
      </div>
    </div>
  );
}

export default Bracket;

