/* eslint-disable no-use-before-define */
//  retrieve data from pokemon api
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './Card';
import Controller from './Controller';
import Main from './Main'

export default function FetchData() {
  const initialData = JSON.parse(localStorage.getItem('pokemonList')) || [];
  const [allPokemon, setPokemon] = useState(initialData || []);
  async function getData() {
    const results = [];
    const pokemons = [];
    console.log('Requesting Data');
    for (let i = 1; i <= 20; i += 1) {
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
        id: uniqid(),
      };
      pokemons.push(pokemon);
      localStorage.setItem('pokemonList', JSON.stringify(pokemons));
      setPokemon((prevState) => [...prevState, pokemon]);
    });
  }

  async function localSave() {
    if (allPokemon.length === 0) {
      await getData();
    } else {
      console.log('LocalStorage has Data');
    }
  }

  function updateArray(array) {
    setPokemon(array);
  }

  return (
    <Main
      allPokemon={allPokemon}
      updateArray={(updateArray)}
    />
  );
}
