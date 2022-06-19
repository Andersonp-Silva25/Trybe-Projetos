// Botão de login
const getSub = document.getElementById('btn-submit');

function valida() {
  const getEmail = document.getElementById('email');
  const getPsw = document.getElementById('psw');
  const email = getEmail.value;
  const psw = getPsw.value;
  if (email === 'tryber@teste.com' || psw === 123456) {
    alert('Olá, Tryber!');
    return true;
  } alert('Email ou senha inválidos.');
  return false;
}

getSub.addEventListener('click', valida);

const colorheader = document.querySelector('.header');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const maxLetters = textArea.maxLength;

function btnValidation() {
  if (agreement.checked) {
    btnSubmit.removeAttribute('disabled');
    btnSubmit.style.backgroundColor = '#8B187B';
  } else {
    btnSubmit.setAttribute('disabled', 'true');
    btnSubmit.style.backgroundColor = '#8A8887';
  }
}

function textCounter() {
  const letters = textArea.value.length;
  const counterLetters = maxLetters - letters;
  counter.setAttribute('value', counterLetters);
  counter.innerHTML = `${counterLetters} caracteres restantes`;
}

agreement.addEventListener('click', btnValidation);

const retName = document.getElementById('name-return');
const retEmail = document.getElementById('email-return');
const retHouse = document.getElementById('house-return');
const retFamily = document.getElementById('family-return');
const retMateria = document.getElementById('materia-return');
const retAva = document.getElementById('ava-return');
const retObs = document.getElementById('obs-return');
const getNone = document.getElementById('container-none');
const form = document.getElementById('form-data');
const getName = document.getElementById('input-name');
const getLast = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getgouse = document.getElementById('house');
const getTextarea = document.getElementById('textarea');
const getForm = document.getElementById('evaluation-form');

function verificaRadio() {
  const radios = document.getElementsByName('family');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
}

function verificaCheckbox() {
  const arrayBox = [];
  const checkBox = document.getElementsByName('learns-options');
  for (let index = 0; index < checkBox.length; index += 1) {
    if (checkBox[index].checked) {
      arrayBox.push(checkBox[index].value);
    }
  }
  return arrayBox.join(', ');
}

function verificaRate() {
  const rates = document.getElementsByName('rate');
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked) {
      return rates[index].value;
    }
  }
}

// function colorHouse() {
//   if(getgouse.value === 'Gitnória') {
//     colorheader.style.backgroundColor = '#FF5733';
//   }else if(getgouse.value === 'Corvinode') {
//     colorheader.style.backgroundColor = '#2E9AFE';
//   }
// }

function returnValue(event) {
  getForm.style.display = 'none';
  event.preventDefault();
  retName.innerText = `${getName.value} ${getLast.value}`;
  retEmail.innerText = getEmail.value;
  retHouse.innerText = getgouse.value;
  retFamily.innerText = verificaRadio();
  retMateria.innerText = verificaCheckbox();
  retAva.innerText = verificaRate();
  retObs.innerText = getTextarea.value;
  form.style.display = 'flex';
  form.style.order = '0';
}

btnSubmit.addEventListener('click', returnValue);

getgouse.addEventListener('click', colorHouse);

textArea.addEventListener('keyup', textCounter);
