const Controller = () => {
  function shuffleArray(allArray) {
    const array = [...allArray]
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function isClick(id, array) {
    const data = array.find((item) => item.id == id);
    if(data.click === true) {
      console.log('Gameover');
    } else {
      console.log('Score + 1');
    }
  }
  function resetGame() {
    
  }
  return {shuffleArray, isClick};
}

export default Controller;
