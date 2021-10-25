// Exercicio 02 ;
const pixelBoard = document.getElementById('pixel-board');

function createGrid() {
  for (let index = 0; index < 5; index += 1) {
    const createDiv = document.createElement('div');

    pixelBoard.appendChild(createDiv);
    for (let secondIndex = 0; secondIndex < 5; secondIndex += 1) {
      const createSon = document.createElement('div');
      createSon.className = 'pixel';
      pixelBoard.appendChild(createSon);
    }
  }
}

window.onload = () => {
  createGrid();
};
