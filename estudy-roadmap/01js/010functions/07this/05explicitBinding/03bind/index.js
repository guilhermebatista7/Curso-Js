const pessoa = {
    nome: 'Guilherme',
}

function saudacao(mensagem){
    console.log(mensagem + ' ,' + this.nome);
}

const saudacaoGuilherme = saudacao.bind(pessoa, 'Olá');
saudacaoGuilherme();