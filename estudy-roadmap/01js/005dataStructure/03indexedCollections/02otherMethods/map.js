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

const names = alunos.map((value, index, array) => {
    console.log(value);
    console.log(value.name);

    return value.name
});

console.log(names);