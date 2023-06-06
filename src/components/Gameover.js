/* eslint-disable react/button-has-type */
import React from 'react';

export default function Gameover({ score, reset }) {
  return (
    <div className="gameover">
      <h1>Gameover</h1>
      <h2>
        Your Score
        {' '}
        {score}
      </h2>
      <button onClick={(reset)}>New Game</button>
    </div>
  );
}
