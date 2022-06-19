function createColorPalette(QTD) {
  let color = '#';
  let hexadecimal = '0123456789ABCDEF';
  let divColor = ['#000000'];
  let colorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < QTD-1; index += 1) {
    for (let index = 0; index < 6; index += 1) {
      color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    if (color == 'white' || color == '#FFFFFF' || color == (255, 255, 255)){
      for (let index = 0; index < 6; index += 1) {
        color += hexadecimal[Math.floor(Math.random() * 16)];
      }
    }
    divColor.push(color); 
    color = '#';      
  }

  for (let index = 0; index < QTD; index += 1) {
    let divColorPalette = document.createElement('div');
    divColorPalette.className = 'color';
    divColorPalette.style.backgroundColor = divColor[index];
    if (index === 0){
      divColorPalette.classList = 'color selected';
    }
    
    colorPalette.appendChild(divColorPalette);
    divColorPalette.addEventListener('click',checkSelected);   
  }
}

function createLines(lines) {
  let pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < lines; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'line';
    for (let index2 = 0; index2 < lines; index2 +=1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      createDiv.appendChild(pixel);
      pixel.addEventListener('click', pixelSelected);
    }

    pixelBoard.appendChild(createDiv);   
  }
}

function removeLines() {
  let pixelBoard = document.querySelector('#pixel-board');
  let line = document.querySelectorAll('.line');

  for (let index = 0; index < line.length; index += 1) {
    let removeLine = line[index];
    pixelBoard.removeChild(removeLine);
  }
}

function checkSelected(event){
  let colorPalette = document.querySelector('.selected');
  colorPalette.classList.remove('selected');
  event.target.classList.add('selected');
}

function pixelSelected(event){
  let colorPalette = document.querySelector('.selected');
  event.target.style.backgroundColor = colorPalette.style.backgroundColor;
}

function clearButton(){
  let pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1){
    pixel[index].style.backgroundColor = 'white';
  }
}

function createClearButton(){
  let clear = document.querySelector('#clear');
  let button = document.createElement('button');
  button.setAttribute('id', 'clear-board');
  button.innerText = 'Limpar';
  clear.appendChild(button);
  button.addEventListener('click', clearButton);
}

function createBoard(){
  let pixelBoardSize = document.querySelector('#pixel-board-size');
  
  let boardSize = document.createElement('input');
  boardSize.setAttribute('id', 'board-size');
  boardSize.setAttribute('type', 'number');
  boardSize.setAttribute('min', 1);
  boardSize.setAttribute('max', 50);
  pixelBoardSize.appendChild(boardSize);

  let generateBoard = document.createElement('button');
  generateBoard.setAttribute('id', 'generate-board');
  generateBoard.innerText = 'VQV';
  pixelBoardSize.appendChild(generateBoard); 
}

function reSizeBoard(){
  let boardSize = document.querySelector('#board-size');

  if (boardSize.value == ''){
    return alert('Board inválido!');
  }else if (boardSize.value < 5){
    boardSize.value = 5;
  } else if (boardSize.value > 50){
    boardSize.value = 50;
  }

  removeLines();
  createLines(boardSize.value);
}

function changeColor() {
  let buttonChange = document.querySelector('#change-color');
  let changeColor = document.createElement('button');
  changeColor.setAttribute('id', 'change');
  changeColor.innerText = 'Novas Cores';
  buttonChange.appendChild(changeColor);
}

function resetColor() {
  let colorPalette = document.querySelector('#color-palette');
  let color = document.querySelectorAll('.color');

  for (let index = 0; index < color.length; index += 1) {
    let resetPalette = color[index];
    colorPalette.removeChild(resetPalette);
  }

  createColorPalette(4);
}

createColorPalette(4);
changeColor();
createBoard();
createClearButton();
createLines(5);


let pixelBoardSize = document.querySelector('#generate-board');
pixelBoardSize.addEventListener('click', reSizeBoard);

let newColor = document.querySelector('#change');
newColor.addEventListener('click', resetColor);

