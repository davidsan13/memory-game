import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
// import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import './assets/style.css';

function App() {
  const initialData = JSON.parse(localStorage.getItem('pokemonList')) || [];
  const [allPokemon, setPokemon] = useState(initialData || []);

  function updateArray(array) {
    setPokemon(array);
  }

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
      console.log('LocalStorage has Datad');
    }
  }

  useEffect(() => {
    localSave();
  }, []);
  useEffect(() => {
    console.log('update');
    console.log(allPokemon);
  }, [allPokemon]);
  return (
    <div className="App">
      <Header></Header>
      <Main allPokemon={allPokemon} updateArray={updateArray} />
    </div>
  );
}

export default App;
