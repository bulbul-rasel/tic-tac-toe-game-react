import './App.css';
import '../src/components/style.css'
import Game from '../src/components/Game'
function App() {
  return (
    <div className="app-header">
      <p className='heading-text'>TIC TAC TOE</p>
      <div className='row jc-center'>
        <Game />
        <Game />
        <Game />
      </div>
      <div className='row jc-center'>
        <Game />
        <Game />
        <Game />
      </div>
      <div className='row jc-center'>
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  );
}

export default App;
