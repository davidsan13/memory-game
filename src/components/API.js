//  retrieve data from pokemon api
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './Card';

export default function Pokemon() {
  const [allPokemon, setPokemon] = useState([])
  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    let pokemonList = localStorage.getItem('pokemonList');
    if (pokemonList) {
      pokemonList = JSON.parse(pokemonList);
      console.log('Has Data');
    } else {
      console.log('Fetching Data');
      const promises = [];
      for (let i = 0; i <= 20; i += 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        promises.push(fetch(url));
      }
      const response = await Promise.all(promises);
      pokemonList = [];
      response.forEach(async (item) => {
        const pokemonData = await item.json();
        pokemonList.push(pokemonData);
        localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
      });
    }
    updatePokemon(pokemonList);
    console.log(1)
  }

  function updatePokemon(pokemonArr) {
    console.log(pokemonArr)
    pokemonArr.forEach((item) => setPokemon((prevState) => [...prevState, {
      img: item.sprites.front_default,
      name: item.name,
      id: uniqid(),
    }]));
  }

  return (
    <Card allPokemon={allPokemon} />
  );
}
