const inputLetterText = document.getElementById('carta-texto');
const buttonCreateLetter = document.getElementById('criar-carta');
const createdLetter = document.getElementById('carta-gerada');
const countWordsLetter = document.getElementById('carta-contador');

const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const inclinationClass = ['skewleft', 'skewright'];

function randomClass() {
  let randomStyleClass = styleClass[Math.floor(Math.random() * styleClass.length)];
  let randomSizeClass = sizeClass[Math.floor(Math.random() * sizeClass.length)];
  let randomRotationClass = rotationClass[Math.floor(Math.random() * rotationClass.length)];
  let randomInclinationClass = inclinationClass[Math.floor(Math.random() * inclinationClass.length)];

  return `${randomStyleClass} ${randomSizeClass} ${randomRotationClass} ${randomInclinationClass}`;
}

function createNewLetter(){
  let words = inputLetterText.value.split(' ');
  let verifySpaces = inputLetterText.value.trim();

  if (verifySpaces === undefined || verifySpaces === [] || verifySpaces === '' || verifySpaces === ' '){
    return createdLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  }else {
    createdLetter.innerText = '';
    let count = 0;
    for (let index = 0; index < words.length; index += 1) {
      if (words[index] === ''){ 
      }else {
        let span = document.createElement('span');
        span.className = randomClass();
        span.innerText = words[index];
        createdLetter.appendChild(span);
        count += 1;
        countWordsLetter.innerText = count;
      }
    }
  }
}

function changeClass(event) {
  if (event.target.tagName === 'SPAN'){
    event.target.className = randomClass();
  }
}

buttonCreateLetter.addEventListener('click', createNewLetter);
createdLetter.addEventListener('click', changeClass);
