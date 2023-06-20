import { useState } from "react";
import "./App.css";
import img from "./img/rick-morty.png";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    // console.log(characterApi)
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty </h1>
        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img className="img-home" alt="Rick & Morty" src={img} />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
