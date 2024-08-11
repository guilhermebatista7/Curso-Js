class Pessoa {
    constructor(nome, telefone){
        this.nome = nome;
        this.telefone = telefone;
    }

    saudacao(){
        console.log(`${this.nome} disse oi`)
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome, telefone, cpf){
        super(nome, telefone);

        this.cpf = cpf;
    }
}

class PessoaJuridica extends Pessoa{
    constructor(nome, telefone, cnpj){
        super(nome, telefone)

        this.cnpj = cnpj;
    }

    saiu(){
        super.saudacao()
        console.log(`${this.nome} foi embora`)
    }
}

let pessoa1 = new PessoaJuridica();
pessoa1.nome = 'Gui';
pessoa1.saiu()

let pessoa2 = new PessoaFisica('Yasmin', 1234, 2345);
console.log(pessoa2.nome + ', com cpf: ' +pessoa2.cpf)