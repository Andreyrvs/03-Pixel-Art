// Exercicio 02 ;
const pixelBoard = document.getElementById('pixel-board');
const colorPalete = document.getElementById('color-palette');

function addClassColor() {
  for (let index = 1; index < 5; index += 1) {
    const createDivColor = document.createElement('div');
    createDivColor.className = 'color';
    colorPalete.appendChild(createDivColor);
  }
}

function createGrid() {
  for (let index = 0; index < 5; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'linha';
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
  addClassColor();
};

colorPalete.addEventListener('click', (e) => {
  e.target.className = 'selected'
});
