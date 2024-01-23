/*
Inviável:
var item1 = 'arroz';
var item2 = 'feijão';
var item3 = 'macarrão';
var item4 = 'leite';
*/ 

const lista = [
    'arroz',
    'feijão',
    'macarrão',
    'leite'
];

alert(lista[0]);


lista[0] = 'café';
console.log(lista[0]); 
console.log(lista);

x = (lista.length - 1);
console.log(lista[x]);

lista.push ('Pão');
console.log(lista);

/* Outra forma:
lista[lista.length] = 'Pão';
*/

console.log(Array.isArray(lista));
console.log(Array.isArray(x));

