//map 
let map = new Map();

map.set('chave1', 'valor1');
map.set('chave2', 'valor2');

console.log(map.size);

console.log(map.has('chave1'));

console.log(map.get('chave1'));

map.forEach((valor, chave) => {
    console.log(chave, valor)
});