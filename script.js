// Exercicio 02 ;
const pixelBoard = document.getElementById('pixel-board');
const colorPalete = document.getElementById('color-palette');

let gridNumber = 5;
// cria o grid
function createGrid() {
  for (let index = 0; index < gridNumber; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'linha';
    pixelBoard.appendChild(createDiv);
    for (let secondIndex = 0; secondIndex < gridNumber; secondIndex += 1) {
      const createSon = document.createElement('div');
      createSon.className = 'pixel';
      pixelBoard.appendChild(createSon);
    }
  }
}

// Requisito 06

colorPalete.addEventListener('click', (e) => {
  if (e.target.id !== 'color-palette') {
    document.querySelector('.selected').classList.remove('selected');

    e.target.classList.add('selected');
  }
});

window.onload = () => {
  createGrid();
};
