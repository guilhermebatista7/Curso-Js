//SetTimeout
function ativarContagem() {
    document.getElementById('tempo1').innerHTML = 'Começou a contar';

    //Executa apenas uma vez o tempo determinado
    time = setTimeout(function(){
        document.getElementById('tempo1').innerHTML = 'Executou o setTimeout';
        document.getElementById('iStart').style.color = 'blue';
    }, 5000);
}

function pararContagem() {
    clearTimeout (time);
    document.getElementById('tempo1').innerHTML = 'Parou a contagem';
}


//SetInterval
function cronometro() {
    tempo = setInterval(function(){
        var passagem = document.getElementById('segundos').innerHTML;

        /*var passagem = document.getElementById('segundos'); não funcionaria pois iria obter apenas o elemento com id 'segundos' e não o conteúdo. Logo não seria possível converter isso em um número pelo ParseInt*/

        var soma = parseInt(passagem) + 1;
        document.getElementById('segundos').innerHTML = soma;
    }, 1000);
};

function pararCronometro() {
    clearInterval(tempo);
};


//Cronômetro reverso

function acabarTempo() {
    tempo = setInterval(function(){
        var passagem = document.getElementById('tempo').innerHTML;
        var soma = parseInt(passagem) - 1;
        
        if (soma === 0) {
            document.getElementById('tempo').innerHTML = 'Tempo esgotado';
            clearInterval(tempo);
        } else { 
            document.getElementById('tempo').innerHTML = soma;
        }
    }, 1000);

};

