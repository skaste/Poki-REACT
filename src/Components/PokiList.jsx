import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon"
//create a useState to pull Poki and set Poki

const PokiList = ({ setSelectedPokemonName }) => {
  const [pokemonList, setPokemonList] = useState([]);
  //need to create a useEffect to pull from the API and place in a try->catch function and also use async await
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const resultJson = await response.json();
        setPokemonList(resultJson.results);
      } catch (e) {
        console.error(error);
      }
    }
    fetchPokemon();
  }, []);
  console.log("PokemonList: ", pokemonList);
  return (
    <section>
      <h2>List of Pokemon</h2>
      <ul>
        <h3>Pokedex</h3>
        
          {pokemonList.map((pokemon) => {
            
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                selected={setSelectedPokemonName}
              />
            
          })}
        
      </ul>
    </section>
  );
};
export default PokiList;
