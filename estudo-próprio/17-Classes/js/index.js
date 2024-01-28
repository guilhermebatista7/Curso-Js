/*Ao invés disso
const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2001
}*/

//fazer isso
class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + ' buzinou: Biiiiiiii';
    }
};

const uno = new Carro('fiat', 'uno', 2001);
const gol = new Carro('volkswagen', 'gol', 2013);
console.log(uno);
console.log(gol.ano);
console.log(gol.buzina());
gol.ano = 2014;
console.log(gol.ano);

class Pessoa {
    constructor(dado1, dado2){
        this.nome = dado1;
        this.idade = parseInt(dado2);
    }
    ola() {
        return this.nome + ' disse oi'
    }
}

const carlos = new Pessoa('Carlos', '29');
const luan = new Pessoa('Luan', '10');
console.log(carlos.ola());
console.log(luan.idade);
let somaIdade = carlos.idade + luan.idade;
console.log(somaIdade);