function data(){
    console.log(arguments[0], arguments[1], arguments[2]);
}
data('Guilherme', 77);

function sum(v1, v2){
    console.log(arguments[1]);
}
sum(1, 2)


function soma(){
    var soma = 0;
    for(let i=0; i<arguments.length; i++){
        soma += arguments[i]
    }
    return soma
}

var res = soma(10, 25, 2);
console.log(res);