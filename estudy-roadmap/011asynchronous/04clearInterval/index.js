var saudacao = setInterval(function(){
    console.log('olá');
}, 1000);

setTimeout(function(){
    console.log('Fim saudações');
    clearInterval(saudacao);
}, 4000);