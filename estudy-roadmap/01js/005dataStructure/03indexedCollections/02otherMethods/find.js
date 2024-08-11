let Guilherme = {
    name:'Guilherme',
    age: 19
}

let Yasmin = {
    name:'Yasmin',
    age: 18
}

let Asmin = {
    name:'Asmin',
    age:17
}

alunos = [Guilherme, Yasmin, Asmin];

const pessoa = alunos.find((value, index, array) => {
    const eMaior = value.age > 18;
    return eMaior;
});

console.log(pessoa)

const achou = alunos.find((value, index, array) => {
    const eYasmin = value.name == 'Yasmin';
    return eYasmin;
});

console.log(achou)