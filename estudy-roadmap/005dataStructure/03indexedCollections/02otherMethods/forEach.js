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

let alunos = [Guilherme, Yasmin, Asmin];

function callback(value, index, array){
    console.log(value);
    console.log(value.name);
}

alunos.forEach(callback);

console.log('-----------------------------------------------');

alunos.forEach((value, index, array) => {
    console.log(value);
    console.log(value.name);
});