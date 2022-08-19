import './App.css';
import '../src/components/style.css'
import Game from '../src/components/Game'
import { useState } from 'react';
const initialState = ['', '', '', '', '', '', '', '', '']

function App() {
  const [gameState, setGAmeState] = useState(initialState);
  return (
    <div className="app-header">
      <button>RESET GAME</button>
      <p className='heading-text'>TIC TAC TOE</p>
      <div className='row jc-center'>
        <Game className="b-bottom-right" state={gameState[0]} />
        <Game className="b-bottom-right" state={gameState[1]} />
        <Game className="b-bottom" state={gameState[2]} />
      </div>
      <div className='row jc-center'>
        <Game className="b-bottom-right" state={gameState[3]} />
        <Game className="b-bottom-right" state={gameState[4]} />
        <Game className="b-bottom" state={gameState[5]} />
      </div>
      <div className='row jc-center'>
        <Game className="b-right" state={gameState[6]} />
        <Game className="b-right" state={gameState[7]} />
        <Game state={gameState[8]} />
      </div>
    </div>
  );
}

export default App;
