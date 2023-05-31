/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ allPokemon, updateCard, handleClick }) {
  const pokemonArray = allPokemon.map((item) => (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div key={item.id} id={item.id} onClick={() => updateCard(item.id)}  className="card">
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
