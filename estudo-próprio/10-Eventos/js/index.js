/*Eventos:
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimensionamento da janela
*/

function eventoClick() {
    document.body.style.backgroundColor = 'green';
}

function eventoDblClick() {
    alert('Evento clique duplo');
}

function viraVermelho() {
    window.document.getElementById('teste-1').style.backgroundColor = 'red';
}

function viraAzul() {
    let div = window.document.getElementById('teste-1');
    div.style.backgroundColor = 'chartreuse';
}

function adicionaTexto() {
    let p = document.querySelector('p#texto');
    p.append('O mouse moveu');
}

function arredondamento() {
    let div = document.getElementById('teste-1');
    div.style.borderRadius = '15px';
}

function voltaNormal() {
    let div = window.document.getElementById('teste-1');
    div.style.borderRadius = '0px';
}

function limpar() {
    let input = document.getElementById('itexto');
    input.value = '';
}

function mudou() {
    console.log('mudou');
}

function saiuFoco() {
    let input = document.querySelector('input#itexto');
    input.style.backgroundColor = 'violet';
}

function teclaPressionada() {
    let input = document.querySelector('input#itexto').value;
    //Input para pegar o valor do input e não o código
    console.log(input+' tecla pressionada');
}