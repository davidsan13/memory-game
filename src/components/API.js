/* eslint-disable no-use-before-define */
//  retrieve data from pokemon api
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Card from './Card';
import Controller from './Controller';

export default function Pokemon() {
  const initialData = JSON.parse(localStorage.getItem('pokemonList'));
  const [allPokemon, setPokemon] = useState(initialData || []);
  useEffect(() => {
    localSave();
    handleClick();
    console.log('mount');
  }, []);

  function handleClick() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.addEventListener('click', () => {
      setPokemon((prevState) => Controller().shuffleArray(prevState));
      console.log(card);
    }));
  }
  async function getData() {
    const pokemons = [];
    const results = [];
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
    return pokemons;
  }

  async function localSave() {
    if (allPokemon.length === 0) {
      await getData();
    } else {
      console.log('LocalStorage has Data');
    }
  }

  return (
    <Card allPokemon={allPokemon} />
  );
}
