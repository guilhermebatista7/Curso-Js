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

const filtro = alunos.filter((value, index, array)=> {
    const eMaior = value.age >= 18;
    return eMaior;
});

console.log(filtro);
console.log(filtro[0].name);