import React, { useState, useEffect } from 'react';
import Controller from './Controller';
import Card from './Card';

export default function Main({ allPokemon, updateArray }) {
  useEffect(() => {
    console.log('mount');
  }, []);

  function updateCard(id) {
    // const array = [...allPokemon]
    let newArray = allPokemon.map((item) => {
      if (item.id === id) {
        return { ...item, click: true };
      }
      return item;
    });
    newArray = Controller().shuffleArray(newArray)
    updateArray(newArray);
  }
  return (
    <Card allPokemon={allPokemon} updateCard={updateCard} />
  );
}