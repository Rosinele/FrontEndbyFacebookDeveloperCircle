/*/tipos

//string
var string = 'Isso é uma string'
var string2 = "Isso também é uma string"
const string3 = `Isso também é ums string`

//boolean
true
false

//number
10
10.2

//underfined
underfined //(diferente de nulo, é auseência de valor)
null       //tem valor, mas o valor é vazio, nada, nulo

//object
new Date()
{}
[]*/

function soma(a,b){
   return a + b
}

const subtraia = (a,b) => a - b;
const divida = (a,b) => a / b;
const multiplique = (a,b) => a * b;

const numero1 = 10;
const numero2 = 10;
const resultado = soma(numero1, numero2);

if(resultado > 20){
    console.log("maior que 20");
}else{
    console.log("menor ou igual a 20")
}

console.log(resultado);