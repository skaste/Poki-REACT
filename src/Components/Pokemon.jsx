const Pokemon = ({selected, name})=>{

  return(
  <li key={name} onClick={()=>{selected(name);}}>
    {name}
  </li>
);
}
export default Pokemon