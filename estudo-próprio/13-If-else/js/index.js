var interruptor = 'on';

if(interruptor == 'on') {
    console.log('Lâmpada ligada');
} else {
    console.log('Lâmpada desligada');
}

var hora = new Date().getHours();
if (hora < 12){
    console.log('Bom dia')
} else if (hora < 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
};

//Condições do input

function verificar() {
    let nome = document.getElementById('inome').value;
    let p = document.getElementById('teste');
    
    if (nome == '' || nome == null){
        p.innerHTML = 'O campo não pode ser vazio';
        p.style.color = 'red';
    } else {
        p.innerHTML = 'Tudo certo';
        p.style.color = 'blue'
    }
}