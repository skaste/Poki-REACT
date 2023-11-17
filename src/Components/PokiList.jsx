import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon"
//create a useState to pull Poki and set Poki

const PokiList = ({ pokemonList }) => {
  const [pokiList, setPokiList] = useState([]);
  //need to create a useEffect to pull from the API and place in a try->catch function and also use async await
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const resultJson = await response.json();
        setPokiList(resultJson.results);
        pokemonList={pokiList}
      } catch (e) {
        console.error(e);
      }
    }
    fetchPokemon();
  }, []);
  console.log("PokiList: ", pokiList);
  return (
    <section>
      <h2>List of Pokemon</h2>
      <ul>
        <h3>Pokedex</h3>
        
          {pokiList.map((pokemon) => {
            <li>
              pokemon.name
            </li>
              // <Pokemon
              //   name={pokemon.name}
              //   selected={setSelectedPokemonName}
              // />
            
          })}
        
      </ul>
    </section>
  );
};
export default PokiList;
