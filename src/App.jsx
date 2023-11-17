import PokiList from './Components/PokiList'
import './App.css'
import Pokemon from './Components/Pokemon';
import { useState } from 'react';

const App = () => {
  //need to create a use state that pulls the PokiList to the App.jsx parent
  const [pokemonList, setPokemonList]=useState([]);
  return (
    <PokiList pokemonList={setPokemonList}/>
  );
}

export default App
