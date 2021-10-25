// Exercicio 02 ;
function createPixelGrid() {
  const catchBoard = document.getElementById('pixel-board');
  const gridNumber = 25;
  for (let index = 1; index <= gridNumber; index += 1) {
    const createItem = document.createElement('div');
    createItem.className = 'pixel';
    createItem.style.backgroundColor = 'rgb(255,255,255)';
    catchBoard.appendChild(createItem);
  }
}
window.onload = () => {
  createPixelGrid();
};
