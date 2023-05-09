//  retrieve data from pokemon api
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export default function Pokemon() {
  const [allPokemon, setPokemon] = useState([{
    clicked: false,
    img: '',
    name: '',
    id: uniqid(),
  }]);
  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const pokemonList = localStorage.getItem('pokemonList');
    if (pokemonList) {
      let poke = JSON.parse(pokemonList);
      console.log('Has Data');
      console.log(poke);
    } else {
      console.log('Fetching Data');
      const promises = [];
      for (let i = 1; i <= 2; i += 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        promises.push(fetch(url));
        // setPokemon((prevState) => [...prevState, {
        //   img: pokemonData.sprites.front_default,
        //   name: pokemonData.name,
        // }]);
      }
      const response = await promises;
      // const pokemonArray = [];
      // response.forEach(async (item) => {
      //   const pokemonData = await item.json();
      //   pokemonArray.push(pokemonData);
      // });
      const pokemonArray = response.map(async (item) => {
        await item.json()
      });

      console.log(pokemonArray)
      // const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
      // const pokemonData = await response.json();
      // const pokemonArray = [];
      // pokemonArray.push(pokemonData);
      // console.log(pokemonArray);
      // console.log(pokemonArray);
      // localStorage.setItem('pokemonList', JSON.stringify(pokemonArray));
    }
  }

  // setPokemon((prevState) => [...prevState, {
  //   ...prevState.clicked,
  //   img: pokemonData.sprites.front_default,
  //   name: pokemonData.name,
  //   id: uniqid(),
  // }]);

  return (
    <div>
      <img src={allPokemon.img} alt="pokemon" />
      <h1>{allPokemon.name}</h1>
    </div>
  );
}
