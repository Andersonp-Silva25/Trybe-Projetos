const colorTitle = document.getElementById('rgb-color');
const colorGuess = document.getElementById('color-guess');
const newGame = document.getElementById('reset-game');
const score = document.getElementById('score');
let colorBall = document.getElementsByClassName('ball');


function createRandomColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let rgb = `(${red}, ${green}, ${blue})`;
  return rgb;
}

function createDivColorGuess(amount){
  for (let index = 0; index < amount; index += 1) {
    let createDiv = document.createElement('div');
    createDiv.className = 'ball';
    createDiv.style.backgroundColor = 'rgb'+createRandomColor();
    colorGuess.appendChild(createDiv);
  }
}

function genereteColors(){
  let color = document.getElementsByClassName('ball');
  for(let index = 0; index < color.length; index += 1) {
    color[index].style.backgroundColor = 'rgb'+createRandomColor();
  }
  
}

function selectColor(event){
  let click = event.target.style.backgroundColor;
  let answer = document.getElementById('answer');

  if(click == colorTitle.innerText) {
    answer.innerText = 'Acertou!';
    let count = parseInt(score.innerText);
    count += 3;
    score.innerText = count;
    genereteColors();
    verifyColor();
  }else {
    answer.innerText = 'Errou! Tente novamente!';
    genereteColors();
    verifyColor();
  }
}

function verifyColor() {
  let trueColor = Math.floor(Math.random()*colorBall.length);
  colorTitle.innerText = 'rgb'+createRandomColor();
  for (let index = 0; index < colorBall.length; index += 1) {
    let ball = colorBall[index];
    if(trueColor === index) {
      ball.style.backgroundColor = colorTitle.innerText;
    }    
  }
}

function resetGame() {
  let answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  score.innerText = '0';
  genereteColors();
  verifyColor();
}

createRandomColor();
createDivColorGuess(6);
colorGuess.addEventListener('click', selectColor);
verifyColor();
newGame.addEventListener('click', resetGame);