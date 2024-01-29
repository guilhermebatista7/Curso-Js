const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2001,
    motor: ['1.6', '1.4', '1.0']
};

// (n funciona) document.getElementById('teste').innerHTML = carro

let texto = JSON.stringify(carro);
document.getElementById('teste').innerHTML = texto;

//(n funciona, pois 'texto' deixou de ser um objeto) console.log(texto.modelo)

let obj = JSON.parse(texto);
console.log(obj.modelo);
console.log(obj.motor[2]);
