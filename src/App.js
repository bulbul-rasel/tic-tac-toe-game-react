import './App.css';
import '../src/components/style.css'
import Game from '../src/components/Game'
import { useState } from 'react';
const initialState = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [gameState, setGAmeState] = useState(initialState);
  const [changeState, setChangeState] = useState(false)

  const clicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
      return;
    strings[index] = changeState ? "X" : "0";
    setChangeState(!changeState)
    setGAmeState(strings)

  }
  return (
    <div className="app-header">
      <p className='heading-text'>TIC TAC TOE</p>
      <button className='clear-button' onClick={() => setGAmeState(initialState)}>RESET GAME</button>
      <div className='row jc-center'>
        <Game className="b-bottom-right" state={gameState[0]} onClick={() => clicked(0)} />
        <Game className="b-bottom-right" state={gameState[1]} onClick={() => clicked(1)} />
        <Game className="b-bottom" state={gameState[2]} onClick={() => clicked(2)} />
      </div>
      <div className='row jc-center'>
        <Game className="b-bottom-right" state={gameState[3]} onClick={() => clicked(3)} />
        <Game className="b-bottom-right" state={gameState[4]} onClick={() => clicked(4)} />
        <Game className="b-bottom" state={gameState[5]} onClick={() => clicked(5)} />
      </div>
      <div className='row jc-center'>
        <Game className="b-right" state={gameState[6]} onClick={() => clicked(6)} />
        <Game className="b-right" state={gameState[7]} onClick={() => clicked(7)} />
        <Game state={gameState[8]} onClick={() => clicked(8)} />
      </div>
    </div>
  );
}

export default App;
