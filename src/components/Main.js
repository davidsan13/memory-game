import React, { useState, useEffect } from 'react';
import Controller from './Controller';
import Card from './Card';

export default function Main({ allPokemon, updateArray }) {
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    console.log('mount');
    updateArray(Controller().shuffleArray(allPokemon));
  }, [clickedPokemons]);

  function updateCard(id) {
    // const array = [...allPokemon]
    let newArray = allPokemon.map((item) => {
      if (item.id === id) {
        return { ...item, click: true };
      }
      return item;
    });
    Controller().isClick(id, allPokemon);
    newArray = Controller().shuffleArray(newArray)
    updateArray(newArray);
  }

  function playRound(id) {
    if(clickedPokemons.includes(id)) {
      resetGame()
    } else {
      setClickedPokemons((prevState) => [...prevState,id])
    }
  }

  function resetGame() {
    console.log('reset')
  }
  return (
    <Card allPokemon={allPokemon} updateCard={playRound} />
  );
}