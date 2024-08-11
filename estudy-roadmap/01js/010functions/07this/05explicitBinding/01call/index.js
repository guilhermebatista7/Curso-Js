const pessoa = {
    nome : 'Guilherme',
}

function saudacao(mensagem){
    console.log(mensagem + ', ' + this. nome);
}

saudacao.call(pessoa, 'Olá');