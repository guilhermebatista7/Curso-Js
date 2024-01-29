/*for (let i = 0; i <= 100; i++) {
    document.getElementById('teste').innerHTML += i + ', ';
}*/


var ano = new Date().getFullYear()

for (let i = ano; i >= 2000; ano--) {
    document.getElementById('iano').innerHTML += "<option value='"+ano+"'>"+ano+"</option>"
}


const carros = ['Gol', 'Fusca', 'Brasília', 'Del Rey', 'Chevette'];
var tamanho = carros.length;

for(let i=0; i <tamanho; i++) {
    document.getElementById('teste').innerHTML +=carros[i] + ' - ';
}

//laço fatorial
var fatorial = 5;
var resultado = 1;
for (i=fatorial; i>1; i--){
    resultado *= i;
};
console.log(resultado);