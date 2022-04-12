// Tipo de dados
undefined;
null;
boolean;
String;
Number;
Symbol;
Object;

// TIPO DE VÁRIAVEIS
// pode ser usado pelo programa todo
var meuNome = 'Pedro';

//pode ser usado no escopo de onde você criou ele
let nossoNome = 123;

// É um valor que nunca muda, const (constante)
const pi = 3.14;

// Iniciar uma variavel
var nome = 'Pedro';

// Variaveis não utilizadas
var a;
var b;
var c;

a = a + 1;
b = b + 5;
c = 'Meu nome' + c;

// Case sensitivy
// UPPER CASE
// low case
var cardDescription;
var meuNome;

// Matematica básica
var sum = 10 + 10;
console.log(sum);

var difference = 10 - 5;
console.log(difference);

var multiplication = 10 * 2;
// 20

var divise = 10 / 2;
// 5

// Incrementar e decrementar
var myVar = 87;
myvaR = myVar + 1;

myVar++;
myVar--;

// Aumentar e diminuir
var a = 3;

a = a + 12;
a += 12;

//String
// ASPAS SIMPLES
var meuNome = 'Pedro AD SAD SADSA ';

// ASPAS DUPLAS
var lucasNome = 'LucasD SAD SAD SAD SA DAS';

// Crase
var joaoNome = `Joao`;

// texto com aspas
var texto = 'Ela disse: "que porra tá acontecendo" e eu n entendi nada';

// Concatenar string
var texto = 'Começo';
texto += 'Fim';

// Construir string
var nomePedro = 'Lucas';
var texto = 'Meu nome é: ' + nomePedro + ' e o seu?';

// operadores de igualdade e relacionais
var var1 = 3;
var var2 = 50;

//igualdade
var1 == 3;
var1 == '3';
3 == '3';

//diferença
var1 != var2;
var1 != '4';

//estritamente igual e diferente (verifica o tipo daquela variavel)
var1 == '3';

// função
function somar(params) {
  var a = 2;
  var b = 5;
  var c = a + b;
  console.log(c);
}
somar();

function somar2(valor1, valor2) {
  var resultado = valor1 + valor2;
  console.log(resultado);
}

somar2(15, 30);
