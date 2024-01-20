//Operadores aritméticos

let valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 % valor2;
conta = ++valor1;
console.log(total)
console.log(conta)

//Operadores de atribuição
let numero1, numero2;
numero1 = 3;
numero2 = 4;
numero2 += numero1 //numero2 = numero2 + numero1
console.log(numero2)

//Operadores de comparação
let n1, n2;
n1 = 3;
n2 = '3';
console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 != n2);
console.log(n1 !== n2);
console.log(n1 > 3);
console.log(n1 < 3);
console.log(n1 >= 3);
console.log(n1 <= 3);

//Operador condicional (ternário)
let idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? 'Não eleitor' : 'Sim, eleitor';
console.log(eleitor)

//Operador lógico
let anos, dias, resultado1, resultado2, resultado3;
anos = 10;
dias = 30;
resultado1 = (anos > 5 && anos < 30);
resultado2 = (anos === 10 || idade === 2);
resultado3 = !(anos === 11)
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);