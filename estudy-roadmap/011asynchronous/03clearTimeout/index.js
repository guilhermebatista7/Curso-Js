var x = 0;

var mensagem = setTimeout(function(){
    console.log('x é 0');
}, 2000);

x = 5;

if (x > 0){
    clearTimeout(mensagem);
    console.log('x não é 0');
}