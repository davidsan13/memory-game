/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ allPokemon }) {
  const pokemonArray = allPokemon.map((item) => (
    <div key={item.id} className="card">
      <img src={item.img} alt="pokemon" />
      <h1>{item.name}</h1>
    </div>
  ));
  return (
    <div className="card-container">
      { pokemonArray }
    </div>
  );
}
