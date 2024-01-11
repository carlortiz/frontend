import React from 'react';
import './App.css'
import bills_logo from './assets/bills_logo.webp'
import steelers_logo from './assets/steelers_logo.webp'

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
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket dolphins">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket texans">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket browns">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket cowboys">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket packers">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket lions">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket rams">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket buccaneers">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket eagles">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket ravens">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket divisionalone">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket divisionaltwo">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket divisionalthree">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket niners">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket divisionalfour">
        <img src={steelers_logo} className='team'></img>
      </div>

      <div className="bracket divisionalfive">
        <img src={bills_logo} className='team'></img>
      </div>

      <div className="bracket divisionalsix">
        <img src={steelers_logo} className='team'></img>
      </div>
    </div>
  );
}

export default App;