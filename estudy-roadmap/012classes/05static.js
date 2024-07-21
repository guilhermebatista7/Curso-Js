class utils{
    static linguagemSistema = 'pt-br';

    static obterDataProximoMes(){
        let now = new Date();
        let date;

        if(now.getMonth() === 11){
            date = new Date(now.getFullYear() + 1, 0, now.getDate());
        } else{
            date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        }

        return date.toLocaleDateString(this.linguagemSistema);
    }
}

console.log(utils.obterDataProximoMes());