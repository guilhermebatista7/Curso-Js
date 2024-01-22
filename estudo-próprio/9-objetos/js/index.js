//objetos

const carro = {
    marca:'ford', modelo:'Ka', ano:2018, placa:'ABC-1234', buzina: function() {
        alert('Biiiii');
    },
    completo: function() {
        return 'A marca é: '+this.marca+' e o modelo é: '+this.modelo;
    }
};

console.log(carro.modelo);
console.log(carro['marca']);
carro.buzina();
console.log(carro.completo());


