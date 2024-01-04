import logo from './logo.svg';
import './App.css';
import Bracket from './components/Bracket';
import Team from './components/Team';
import Matchup from './components/Matchup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bracket/>
        <Team/>
        <Matchup/>
      </header>
    </div>
  );
}

export default App;
