// Exercicio 02 ;
window.onload = () => {
  createPixelGrid();
};

function createPixelGrid() {
  const catchBoard = document.getElementById('pixel-board');
  let n = 24;
  for (let index = 0; index <= n; index += 1) {
    const createItem = document.createElement('div');
    createItem.className = 'pixel';
    createItem.style.backgroundColor = 'white';
    catchBoard.appendChild(createItem);
  }
}
