class Pessoa {
    nome;

    get username(){
        return this.nome;
    }

    set setName(ident){
        if(!ident){
            throw new Error('O nome não pode ser vazio');
        }
        this.nome = ident;
    }
}

let pessoa1 = new Pessoa();
pessoa1.setName = '';
console.log(pessoa1.username);