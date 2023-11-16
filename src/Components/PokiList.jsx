import React, { useEffect, useState } from "react";

const PokiList = () => {
  //create a useState to pull Poki and set Poki 
  const [] = useState();
  //need to create a useEffect to pull from the API and place in a try->catch function and also use async await
  useEffect(() => {
    async function fetchPokemon() {
      try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const result = await response.json();
      }catch (e) {
        console.error(error);
      }
    }
    fetchPokemon();
  })
  <>
  
  </>
}
export default PokiList;