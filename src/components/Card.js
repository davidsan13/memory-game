import React from 'react';


export default function Card({allPokemon}) {
  console.log(allPokemon)
  const pokemonArray = allPokemon.map(item => 
    <div id={item.id}>
      <img src={item.img} alt='pokemon' />
      <h1>{item.name}</h1>
    </div>
    )
  return (
    <div>
      {pokemonArray}
    </div>
  );
}