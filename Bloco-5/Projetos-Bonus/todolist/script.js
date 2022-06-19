const inputAssignment = document.getElementById('texto-tarefa');
const btnCreateAssignment = document.getElementById('criar-tarefa');
const assignmentList = document.getElementById('lista-tarefas');
const elementList = document.getElementsByTagName('li');
const clearList = document.getElementById('apaga-tudo');
const clearFinishedItem = document.getElementById('remover-finalizados');
const saveList = document.getElementById('salvar-tarefas');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const removeSelected = document.getElementById('remover-selecionado');


function createList(){
  let createLi = document.createElement('li');
  let list = [];
  list.push(inputAssignment.value);
  for (let index = 0; index < list.length; index += 1){
    createLi.innerText = list[index];
    inputAssignment.value = '';
  }
  assignmentList.appendChild(createLi);
}

function changeStyleList (event) {
  let eventList = event.target;
  for (let index = 0; index < elementList.length; index += 1) {
    elementList[index].classList.remove('item-list');
  } 
  eventList.classList.add('item-list');
  
}

function assignmentCompleted(event) {
  let eventList = event.target;
  let saveClass = '';
  for (let index = 0; index < eventList.classList.length; index += 1) {
    if (eventList.classList[index] === 'completed') {
      saveClass = eventList.classList[index];
    }
  }
  if (saveClass === 'completed') {
    eventList.classList.remove('completed');
  }else if (saveClass !== 'completed'){
    eventList.classList.add('completed');
  }
}

function removeAllList(){
  assignmentList.innerHTML = '';
}

function removeFinishedItem(){
  for (let index = 0; index < assignmentList.childNodes.length; index += 1) {
    let verifyElement = assignmentList.childNodes[index];
    if (verifyElement.classList.contains('completed')) {
      verifyElement.remove();
      index = 0;
    }
  }
}

function saveElementList () {
  let storage = localStorage;
  storage.setItem('List', assignmentList.innerHTML);
}

function verifySavedList (){
  let storage = localStorage;
  if (storage.getItem('List') !== '') {
    assignmentList.innerHTML = storage.getItem('List'); 
  }
}

function moveUpItem (){
  let selectedElement = document.querySelector('.item-list');
  if (selectedElement){
    let previousElement = selectedElement.previousSibling; // busca o elemento anterior ao selecionado
    if (previousElement !== null){
      selectedElement.parentNode.insertBefore(selectedElement, previousElement);
      saveElementList();
   }
  }
}

function moveDownItem (){
  let selectedElement = document.querySelector('.item-list');
  if (selectedElement){
    let nextElement = selectedElement.nextSibling; // busca o elemento depois do selecionado
    if (nextElement !== null){
      selectedElement.parentNode.insertBefore(nextElement, selectedElement);
      saveElementList();
   }
  }
}

function removeSelectedItem(){
  let selectedElement = document.querySelector('.item-list');
  selectedElement.remove();
}

verifySavedList();
btnCreateAssignment.addEventListener('click', createList);
assignmentList.addEventListener('click', changeStyleList);
assignmentList.addEventListener('dblclick', assignmentCompleted);
clearList.addEventListener('click', removeAllList);
clearFinishedItem.addEventListener('click', removeFinishedItem);
saveList.addEventListener('click', saveElementList);
moveUp.addEventListener('click', moveUpItem);
moveDown.addEventListener('click', moveDownItem);
removeSelected.addEventListener('click', removeSelectedItem);
