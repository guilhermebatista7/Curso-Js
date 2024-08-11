let Guilherme = {
    name:'Guilherme',
    age: 18
}

let Yasmin = {
    name:'Yasmin',
    age: 18
}

let Asmin = {
    name:'Asmin',
    age:18
}


alunos = [Guilherme, Yasmin, Asmin];

/*
alunos.reduce((valorAnterior, valorAtual, indexAtual) => {
    console.log(valorAtual)
});

retorna os elementos Yasmin e Asmin
*/

/*
alunos.reduce((valorAnterior, valorAtual, indexAtual) => {
    console.log(valorAtual)
});

retorna todos os elementos, pois temo 0
*/

const somaIdade = alunos.reduce((valorAnterior, valorAtual, indexAtual) => {
    const soma = valorAnterior + valorAtual.age;
    return soma;
}, 0);

console.log('A soma das idades é:',somaIdade);