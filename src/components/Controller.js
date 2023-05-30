const Controller = () => {
  function shuffleArray(allArray) {
   let array = [...allArray]
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  return {shuffleArray};
}

export default Controller