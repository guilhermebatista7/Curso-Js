function maioridade(num){
    if(num >= 18){
        console.log('Você é maior de idade');
    } else{
        console.log('Você é menor de idade');
    }
}

function age(idade, callback){
    console.log('Você tem ' + idade + ' ano(s)');
    callback(idade);
}

age(17, maioridade);