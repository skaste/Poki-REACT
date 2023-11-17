const Pokemon = ({selected, pokemon})=>{
return(
  <li onClick={()=>{selected(pokemon.name);}}>
    {pokemon.name}
  </li>
);
}
export default Pokemon