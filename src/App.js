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

function App() {
  return (
    <div>
      <div className="bracket bills">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket steelers">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket chiefs">
        <img src={chiefs_logo} className='team'></img>
      </div>

      <div className="bracket dolphins">
        <img src={dolphins_logo} className='team'></img>
      </div>

      <div className="bracket texans">
        <img src={texans_logo} className='team'></img>
      </div>

      <div className="bracket browns">
        <img src={browns_logo} className='team'></img>
      </div>

      <div className="bracket cowboys">
        <img src={cowboys_logo} className='team'></img>
      </div>

      <div className="bracket packers">
        <img src={packers_logo} className='team'></img>
      </div>

      <div className="bracket lions">
        <img src={lions_logo} className='team'></img>
      </div>

      <div className="bracket rams">
        <img src={rams_logo} className='team'></img>
      </div>

      <div className="bracket buccaneers">
        <img src={buccaneers_logo} className='team'></img>
      </div>

      <div className="bracket eagles">
        <img src={eagles_logo} className='team'></img>
      </div>

      <div className="bracket ravens">
        <img src={ravens_logo} className='team'></img>
      </div>

      <div className="bracket divisionalone">
      </div>

      <div className="bracket divisionaltwo">
      </div>

      <div className="bracket divisionalthree">
      </div>

      <div className="bracket niners">
        <img src={niners_logo} className='team'></img>
      </div>

      <div className="bracket divisionalfour">
      </div>

      <div className="bracket divisionalfive">
      </div>

      <div className="bracket divisionalsix">
      </div>

      <div className="bracket conferenceone">
      </div>

      <div className="bracket conferencetwo">
      </div>

      <div className="bracket conferencethree">
      </div>

      <div className="bracket conferencefour">
      </div>

      <div className="bracket superbowlone">
      </div>

      <div className="bracket superbowltwo">
      </div>

      <img src={superbowl_logo} className='superbowllogo'></img>
    </div>
  );
}

export default App;