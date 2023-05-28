//  retrieve data from pokemon api
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './Card';

export default function Pokemon() {
  const initialData = JSON.parse(localStorage.getItem('pokemonList'));
  const [allPokemon, setPokemon] = useState(initialData || []);
  useEffect(() => {
    // const pokemonList = getPokemons();
    // updatePokemon(pokemonList);
    localSave();
  }, []);

  async function getPokemons() {
    let pokemonList = localStorage.getItem('pokemonList');
    if (pokemonList) {
      pokemonList = JSON.parse(pokemonList);
      console.log('Has Data');
      console.log(pokemonList);
    } else {
      console.log('Fetching Data');
      const promises = [];
      for (let i = 0; i <= 1; i += 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        promises.push(fetch(url));
      }
      const response = await Promise.all(promises);
      // pokemonList = [];
    //  response.forEach(async (item) => {
    //     const pokemonData = await item.json();
    //     pokemonList.push(pokemonData);
    //     localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
    //   });
 
      pokemonList = response.map(async (item) => {
        const pokemonData = await item.json();
        pokemonList.push(pokemonData);
      });
      setTimeout(() => {localStorage.setItem('pokemonList', JSON.stringify(pokemonList))}, 10000);
    }
    

    console.log(pokemonList);
    return pokemonList;
  }

  async function getData() {
    const pokemons = [];
    const results = [];
    for (let i = 1; i <= 2; i += 1) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
      results.push(fetch(url));
    }
    const response = await Promise.all(results);
    response.forEach(async (item) => {
      const data = await item.json();
      const pokemon = {
        click: false,
        img: data.sprites.front_default,
        name: data.name,
      };
      console.log(pokemon)
      pokemons.push(pokemon);
      localStorage.setItem('pokemonList', JSON.stringify(pokemons));
      setPokemon((prevState) => [...prevState, pokemon]);
    });
    console.log(pokemons);
   
    return pokemons;
  }

  async function localSave() {
    let pokemonList = localStorage.getItem('pokemonList');
    if (pokemonList == null) {
      await getData();
      // pokemonList = JSON.parse(pokemonList);
      // console.log('Has Data');
    }
  }
  async function updatePokemon() {
    let pokemonList = localStorage.getItem('pokemonList');
    console.log(pokemonList)
    pokemonList = JSON.parse(pokemonList);
    pokemonList.forEach((item) => setPokemon((prevState) => [...prevState, {
      click: false,
      img: item.sprites.front_default,
      name: item.name,
      id: uniqid(),
    }]));
  }

  return (
    <Card allPokemon={allPokemon} />
  );
}
