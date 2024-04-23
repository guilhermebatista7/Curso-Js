let alunos = new Set();

alunos.add('Guilherme');
alunos.add('Yasmin'); //só armazena uma vez
alunos.add('Yasmin');
alunos.add('asmin');

let alunosOrdenados = [...alunos].sort();

console.log(alunosOrdenados[0]); //retorna o primeiro nome

console.log(alunos.size);

console.log(alunos.has('Guilherme'));

alunos.delete('Guilherme');
console.log(alunos.size);

alunos.forEach(aluno => {
    console.log(aluno)
})

alunos.clear();
console.log(alunos.size);