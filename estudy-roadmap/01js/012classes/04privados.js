class impostoPessoa{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }

    #taxaImposto = 0.20;

    #calculoImposto(){
        return this.salario * this.#taxaImposto;
    }

    obterSalario(){
        return (this.salario - this.#calculoImposto());
    }
}

let pessoa1 = new impostoPessoa('Guilherme', 1000);
console.log(`${pessoa1.nome} tem um salário de ${pessoa1.obterSalario()}`);
//pessoa1.#taxaImposto = 0.5;
