import React, { useEffect, useState } from "react";

  //create a useState to pull Poki and set Poki 


const PokiList = () => {
const [pokemonList, setPokemonList] = useState([]);
  //need to create a useEffect to pull from the API and place in a try->catch function and also use async await
  useEffect(() => {
    async function fetchPokemon() {
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const result = await response.json();
        setPokemonList(result);
      }catch (e) {
        console.error(error);
      }
    }
    fetchPokemon();
  },[]);
  console.log("PokemonList: ", pokemonList);
  return(
    <section>
      <ul>
        <h2>Pokemon List</h2>
        <li>Name: </li>
      </ul>
    </section>

  );
}
export default PokiList;