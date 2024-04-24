let alunos = new WeakSet();
let aluno1 = {nome: "Guilherme"};
let aluno2 = {nome: "Yasmin"};

alunos.add(aluno1);
alunos.add(aluno2);

let arrayAlunos = [aluno1, aluno2];

arrayAlunos.forEach(aluno => {
    console.log(aluno.nome)
});

//console.log(alunos.size); //n tem essa propriedade

//alunos.clear();
//console.log(alunos.size)