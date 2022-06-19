// Verificando se os valores são true ou false
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Calculando a área de um triangulo
function calcArea(base, height) {
  return (base * height) / 2;
}

// Separando uma frase por virgula
function splitSentence(string) {
  let separator = " ";
  let array = string.split(separator);
  return array;
}

// Concatenando elementos de um array
function concatName(names) {
  let firstPosition = names[0];
  let lastPosition = names[names.length-1];
  return lastPosition +", "+ firstPosition;
}

// Calculando os pontos de um jogo
function footballPoints(wins, ties) {
  totalWins = wins * 3;
  totalTies = ties * 1;
  result = totalWins + totalTies;
  return result;
}

// Verifica quantas vezes o maior numero do array se repete
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let countNumbers = 0;
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber < numbers[index]){
      higherNumber = numbers[index];
    }
  }
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber === numbers[index]){
      countNumbers += 1;
    }
  }
  return countNumbers;
}

// Verifica qual dos gatos esta mais proximo do rato
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1AndMouse = cat1 - mouse;
  let distanceCat2AndMouse = cat2 - mouse;
  if(distanceCat1AndMouse < 0){
    distanceCat1AndMouse = mouse - cat1;
  }
  if(distanceCat2AndMouse < 0){
    distanceCat2AndMouse = mouse - cat2;
  }
  if(distanceCat1AndMouse < distanceCat2AndMouse){
    return "cat1";
  }else if(distanceCat1AndMouse > distanceCat2AndMouse){
    return "cat2";
  }else if(distanceCat1AndMouse === distanceCat2AndMouse){
    return "os gatos trombam e o rato foge";
  }
}

// Verifica se um numero é divisivel por 3, 5, ou 3 e 5 e retorna uma palavra diferente para cada divisão
function fizzBuzz(numbers) {
  let result = [];

  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index]%3 === 0 && numbers[index]%5 === 0){
      result.push("fizzBuzz");
    }else if(numbers[index]%3 === 0){
      result.push("fizz");
    }else if(numbers[index]%5 === 0){
      result.push("buzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
}

// Codifica e Descodifica vogais em numereos e numeros em vogais
function encode(string) {
  let result = "";
  for(let index = 0; index < string.length; index += 1){
    if(string[index] === "a"){
      result += "1";
    }else if(string[index] === "e"){
      result += "2";
    }else if(string[index] === "i"){
      result += "3";
    }else if(string[index] === "o"){
      result += "4";
    }else if(string[index] === "u"){
      result += "5";
    }else{
      result += string[index];
    }
  }
  return result;
}
function decode(string) {
  let result = "";
  for(let index = 0; index < string.length; index += 1){
    if(string[index] === "1"){
      result += "a";
    }else if(string[index] === "2"){
      result += "e";
    }else if(string[index] === "3"){
      result += "i";
    }else if(string[index] === "4"){
      result += "o";
    }else if(string[index] === "5"){
      result += "u";
    }else{
      result += string[index];
    }
  }
  return result;
}

// Gera um objeto atraves de um array em ordem alfabetica
function techList(tech, name) {
  if(tech == undefined || tech == '' || tech == 0 || tech == []){
    return "Vazio!";
  }

  tech.sort();
  let object = [];

  for(let index = 0; index < tech.length; index += 1){
    object.push(
      {
        tech: tech[index], 
        name: name,
      });
  }
  return object;

}
