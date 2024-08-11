var carro = {
    modelo: 'uno',
    marca: 'fiat',
    ano: 2004,
    estado: ['novo', 'usado'],
    apresentar: function() {
        console.log('O carro é da marca fiat, modelo uno e ano 2004. Além disso, é preto e rebaixado')
    }
}

console.log(carro['modelo']);
console.log(carro.ano);
console.log(carro.estado[1]);

carro.cor = 'preto';
carro['estilo'] = 'rebaixado';
console.log(carro);

carro.apresentar()

