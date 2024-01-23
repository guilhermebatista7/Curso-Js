const comida = ['arroz', 'feijão', 'uva', 'banana'];

document.getElementById('teste').innerHTML = comida.join(' - ');

comida.pop();
console.log('método pop- '+comida);

comida.shift();
console.log('método shift- '+comida);

comida.unshift('maionese');
console.log('método unshift- '+comida);

//delete comida[2];

comida.splice(1,0,"item adicionado 1", "item adicionado 2");
console.log('método splice- '+comida);

const lista1 = ['arroz', 'leite', 'macarrão'];
const lista2 = ['suco', 'refrigerante', 'carne'];
const juncaoLista = lista1.concat(lista2);
console.log('método concat- '+juncaoLista);

const jogadores = ['David Neres', 'Luan', 'Pelé', 'Ronaldo', 'Paulinho'];
const craques = jogadores.slice(2, 4);
console.log('método slice- '+craques);

jogadoresOrdem = jogadores.sort();
console.log('método sort- '+jogadoresOrdem);

const numeros = [30, 29, 78, 53];
console.log('ordem crescente '+numeros.sort(function(a,b){return a-b}))
//explicação caderno

function MaiorNumero(array){
    return Math.max.apply(null, array);
}
console.log('maior número '+ MaiorNumero(numeros));

function MenorNumero(array) {
    return Math.min.apply(null, array);
}
console.log('Menor número '+MenorNumero(numeros));

const maior30 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 30;
}
console.log('Filtragem '+maior30);