import './App.css';
import img from './img/rick-morty.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'> Rick & Morty </h1>
       <img className='img-home' alt='Rick & Morty' src={img} />
      </header>
    </div>
  );
}

export default App;
