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

//  seleciona a cor ao clicar na palette.

function catchColor() {
  const catchClassActiveColor = document.querySelector('.selected');
  const theCSSprop = window
    .getComputedStyle(catchClassActiveColor, null)
    .getPropertyValue('background-color');
  console.log(theCSSprop);
  return theCSSprop;
}

// troca a classe ao clicar na palette;
colorPalete.addEventListener('click', (e) => {
  if (e.target.id !== 'color-palette') {
    document.querySelector('.selected').classList.remove('selected');

    e.target.classList.add('selected');
    catchColor();
  }
});

pixelBoard.addEventListener('click', (e) => {
  if (e.target.id !== 'pixel-board') {
    e.target.style.backgroundColor = catchColor();
    // console.log(test);
  }
});
window.onload = () => {
  createGrid();
};
