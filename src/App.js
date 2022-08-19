import './App.css';
import '../src/components/style.css'
import Game from '../src/components/Game'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      toast.success(`YAY..!${winner} has own the Game`)
      setGAmeState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
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
      <ToastContainer />
    </div>
  );
}

export default App;
