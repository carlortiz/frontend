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

  const fetchImageURL = () => {
    if (props.image)
      return imageMap[props.image];
  }

  const getImageTag = ( teamImage ) => {
    if (props.image) {
      // for brackets who DO have an image, this creates a new team image html tag
      const newImageTag = document.createElement('img')
      newImageTag.src = imageURL;
      newImageTag.className = "team";
      newImageTag.alt = "";
      teamImage = newImageTag;
    } else {
      // for brackets who DO NOT have an image, this grabs an old team image html tag
      const clickedBracket = document.getElementsByClassName(props.seed);
      const clickedBracketImage = clickedBracket[0].querySelector('img');
      const clickedBracketImageClone = clickedBracketImage.cloneNode(true);
      teamImage = clickedBracketImageClone;
    }

    return teamImage;
  }
  
  const imageURL = fetchImageURL();

  const handleClick = () => {
    let newSeed;
    let potentialNewBracket;
    let teamImage;
    
    if (props.seed.includes("afc_wildcard_seed_2"))
      newSeed = "afc_divisional_seed_2";

    if (props.seed.includes("afc_wildcard_seed_4")) {
      newSeed = "afc_divisional_seed_2";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "afc_divisional_seed_3";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "afc_divisional_seed_4";
    }

    if (props.seed.includes("afc_wildcard_seed_1") ||
        props.seed.includes("afc_wildcard_seed_3"))
    {
      newSeed = "afc_divisional_seed_3";
      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "afc_divisional_seed_4";
    }

    if (props.seed.includes("afc_wildcard_seed_5") ||
        props.seed.includes("afc_wildcard_seed_6")) {
      newSeed = "afc_divisional_seed_3";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "afc_divisional_seed_4";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "afc_divisional_seed_2";
    }

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

    if (props.seed.includes("nfc_wildcard_seed_2"))
      newSeed = "nfc_divisional_seed_2";

    if (props.seed.includes("nfc_wildcard_seed_4")) {
      newSeed = "nfc_divisional_seed_2";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "nfc_divisional_seed_3";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "nfc_divisional_seed_4";
    }

    if (props.seed.includes("nfc_wildcard_seed_1") ||
        props.seed.includes("nfc_wildcard_seed_3"))
    {
      newSeed = "nfc_divisional_seed_3";
      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "nfc_divisional_seed_4";
    }

    if (props.seed.includes("nfc_wildcard_seed_5") ||
        props.seed.includes("nfc_wildcard_seed_6")) {
      console.log(props.seed);
      newSeed = "nfc_divisional_seed_3";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "nfc_divisional_seed_4";

      potentialNewBracket = document.getElementsByClassName(newSeed);
      if (potentialNewBracket[0].querySelector('img'))
        newSeed = "nfc_divisional_seed_2";
    }

    teamImage = getImageTag(teamImage);

    // gets the new bracket html by the new seed
    const newBracket = document.getElementsByClassName(newSeed);

    // adds class to special super bowl winner html
    if (newSeed.includes("superbowl_champion"))
      teamImage.classList.add('team_champion');

    // appends the team image html tag
    if (!(newBracket[0].querySelector('img')))
      newBracket[0].appendChild(teamImage);
  };

  return (
    <div className={props.seed} onClick={handleClick}>
      {props.image && <img src={imageURL} className="team" alt="" />}
    </div>
  );
}

export default Bracket;
