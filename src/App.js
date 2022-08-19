import './App.css';
import '../src/components/style.css'
import Game from '../src/components/Game'
function App() {
  return (
    <div className="app-header">
      <button>RESET</button>
      <p className='heading-text'>TIC TAC TOE</p>
      <div className='row jc-center'>
        <Game className="b-bottom-right" />
        <Game className="b-bottom-right" />
        <Game className="b-bottom" />
      </div>
      <div className='row jc-center'>
        <Game className="b-bottom-right" />
        <Game className="b-bottom-right" />
        <Game className="b-bottom" />
      </div>
      <div className='row jc-center'>
        <Game className="b-right" />
        <Game className="b-right" />
        <Game />
      </div>
    </div>
  );
}

export default App;
