// Exercicio 02 ;
const pixelBoard = document.getElementById('pixel-board');
const colorPalete = document.getElementById('color-palette');

const gridNumber = 5;
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
  // console.log(theCSSprop);
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

// troca a cor dos pixel no Grid
pixelBoard.addEventListener('click', (e) => {
  if (e.target.id !== 'pixel-board') {
    e.target.style.backgroundColor = catchColor();
  }
});

// cria batao
function creatButton() {
  const catchBtn = document.querySelector('.add-btn');
  const creatBnt = document.createElement('button');
  creatBnt.id = 'clear-board';
  creatBnt.innerText = 'Limpar';
  catchBtn.appendChild(creatBnt);
}

const pixel = document.querySelector('.pixel-board');
const colorPtt = document.querySelector('.color');
const catchButton = document.getElementById('#clear-board');

for (let index = 0; index < pixel; index += 1) {
  pixel[index].addEventListener('click', (e) => {
    for (let secondIndex = 0; secondIndex < pixel; secondIndex += 1) {
      if (pixel[secondIndex] !== colorPtt) {
        e.target.style.backgroundColor = 'white';
      }
    }
  });
}
// Quando inicia a Pagina
window.onload = () => {
  createGrid();
  creatButton();
};
