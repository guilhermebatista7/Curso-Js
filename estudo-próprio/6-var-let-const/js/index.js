/*
Há três tipos de variáveis:
var
let
const
*/


//delaração de variáveis
var a,b,c;

//atribuição de valores
a=2;
b=3;
c = a + b;
document.getElementById('texto').innerHTML = c

var nome, sobrenome, nomeCompleto, idade, pessoa;
nome = 'João';
sobrenome = 'Augusto';
idade = 30;
nomeCompleto = nome + ' ' + sobrenome;
pessoa = nome + ' ' + idade;

document.getElementById('palavra').innerHTML = pessoa;

//próximo

let x = 10

{
    let x = 2
    // alert (x) aparece 2
} 
document.getElementById('numero').innerHTML = x //aparece 10


const y = 2;
//const y = 3; não pode ser declrado duas vezes

