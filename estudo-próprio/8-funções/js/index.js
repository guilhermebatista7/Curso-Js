function soma(valor1, valor2) {
    return valor1 + valor2;
}

window.document.querySelector('p#texto').innerHTML =  soma(10, 10);



function realParaDolar(valorReal, cotacaoDolar) {
    return valorReal * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 4.93;
var total = realParaDolar(valorReal, cotacao);
console.log('O valor em real é R$: '+valorReal+' o valor em dólar U$ é: '+total);

function alerthello () {
    alert ('hello')
}

var para = document.getElementById('texto');

function muda() {
    para.style.backgroundColor = 'green';
    para.style.width = '100px'
}

// muda(); assim é outra forma de chmar a função

function paraCelsius(valorFahrenheit) {
    return (valorFahrenheit - 32) / 1.8
}

let temperatura = paraCelsius(40).toFixed(2)

console.log('A temperatura é de: '+temperatura+'ºC')