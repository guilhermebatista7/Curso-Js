function exibir(num){
    console.log('Resultado: ' + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function mult(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 3, exibir);
mult(4, 2, exibir);