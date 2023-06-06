/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import Controller from './Controller';
import Card from './Card';
import Gameover from './Gameover';
// eslint-disable-next-line react/prop-types
export default function Main({ allPokemon, updateArray }) {
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('mount');
    updateArray(Controller().shuffleArray(allPokemon));
  }, [clickedPokemons]);

  function playRound(id) {
    if (clickedPokemons.includes(id)) {
      setBestScore((prevState) => Math.max(prevState, currentScore));
      // eslint-disable-next-line no-use-before-define
      setIsOver(true)
      resetGame();
    } else {
      setCurrentScore((prevState) => prevState + 1);
      setClickedPokemons((prevState) => [...prevState, id]);
    }
  }

  function resetGame() {
    setCurrentScore(0);
    setClickedPokemons([]);
  }
  return (
    <div className='main'>
      <div className="score-container">
        <h1>
          Score:
          {' '}
          {currentScore}
        </h1>
        <h1>
          Best Score:
          {' '}
          {bestScore}
        </h1>
      </div>
      <Card allPokemon={allPokemon} updateCard={playRound} />
    </div>
  );
}
