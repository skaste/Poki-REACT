import React, { useEffect, useState } from "react";

  //create a useState to pull Poki and set Poki 


const PokiList = () => {
const [pokemonList, setPokemonList] = useState([]);
  //need to create a useEffect to pull from the API and place in a try->catch function and also use async await
  useEffect(() => {
    async function fetchPokemon() {
      console.log(`hello`)
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const resultJson = await response.json();
        setPokemonList(resultJson.results);
      }catch (e) {
        console.error(error);
      }
    }
    fetchPokemon();
  },[]);
  console.log("PokemonList: ", pokemonList);
 
  
}
export default PokiList;