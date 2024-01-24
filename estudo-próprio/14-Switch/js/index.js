function verificaCor() {
    let cor = document.getElementById('icor').value;
    cor = cor[0].toLowerCase();
    console.log(cor)
    
    switch (cor) {
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'vermelho':
            document.body.style.backgroundColor = 'red';
            break;
        case 'amarelo':
            document.body.style.backgroundColor = 'yellow';
            break;
        default:
            document.getElementById('teste').innerHTML = 'Nenhuma cor disponível para: '+cor;
    }
};

function acharDia() {
    let p = window.document.getElementById('diaSemana');
    let dia = new Date().getDay();

    switch (dia){
        case 0:
            p.innerHTML = 'domingo';
            break;
        case 1: 
            p.innerHTML = 'segunda';
            break;
        case 2: 
            p.innerHTML = 'terça';
            break;
        case 3: 
            p.innerHTML = 'quarta';
            break;
        case 4: 
            p.innerHTML = 'quinta';
            break;
        case 5: 
            p.innerhtml = 'sexta';
            break;
        case 6:
            p.innerhtml = 'sábado';
            break;
    }
}