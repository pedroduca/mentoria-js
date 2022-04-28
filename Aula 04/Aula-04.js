//Arrow function =>

//const sayMyName = function () => { }
//const sayMyName = () => {}
console.log('TESTE');

//Estrutura de repetição
// for

//1- inicialização de uma variavel
//2- condição de continuação desse loop
//3- expressão final após finalizar o loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//break - para a execução do loop
for (let i = 0; i < 10; i++) {
  if (i === 50) {
    break;
  }
  console.log(i);
}

//continue - pula a execução do loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//for...in
// Criar um loop em cima de um objeto, em cima de uma propriedade de um objeto
let person = {
  name: 'Pedro',
  age: 22,
  weight: 70.3,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}

//while
//While faz mto sentido usar quando a gente n sabe a hora de parar
let i = 43999394933;
while (i < 10) {
  console.log(i);
  i /= 30;
}

//for...of
//loop apartir de alguma váriavel que a gente tiver
let name = 'Pedro';
for (const char of name) {
  console.log(char);
}

let names = ['João', 'Cleison', 'Lucas'];
for (const name of names) {
  console.log(name);
}
