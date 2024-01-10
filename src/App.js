// App.js
import React from 'react';
import Bracket from './components/Bracket/Bracket';

let positions = [{x: "20", y:"50"}, {x: "20", y:"90"}];
let teams = ["bills", "steelers"];

function App() {
  return (
    <div>
      {positions.map((position, index) => (
        <Bracket key={index} position={position} team={teams[index]} />
      ))}
    </div>
  );
}

export default App;