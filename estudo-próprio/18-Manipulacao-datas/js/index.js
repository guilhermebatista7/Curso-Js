//Comando base para pegar a data
let data = new Date();
console.log('Traz o ano, mês, dia, data e hora: '+data);

//Pega o ano atual com 4 dígitos
let ano = new Date().getFullYear();
//ou let ano = data.getFullYear();
console.log(ano);

//Pegar mês atual de 0 até 11, sendo 0 janeiro e 11 dezembro
let mes = new Date().getMonth();
console.log('Retorna apenas o número '+mes);

const mesesDoAno = ['Janeiro', 'Favereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscrito = mesesDoAno[mes];
console.log(mesEscrito);

//Pegar dia do mês
let diaMes = new Date().getDate();
console.log('Dia do mês: '+diaMes);

//Pegar dia da semana de 0 até 6
let diaSemana = new Date().getDay();
const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let diaSemanaEscrito = semana[diaSemana];
console.log('Dia da semana: '+diaSemanaEscrito);

//Pegar a hora - 0 até 23
let hora = new Date().getHours();
console.log(hora+' horas');

//Pegar os minutos 0 até 59
let minutos = new Date().getMinutes();
console.log(minutos+' minutos');

//Pegar seundos 0 até 59
let segundos = new Date().getSeconds();
console.log(segundos+' segundos');

//pega milissegundos 0 até 999
let milissegundos = new Date().getMilliseconds();
console.log(milissegundos+' milissegundos');

//Pegar data e hora padrão brasileiro (dia/mes/ano)
let dataeHoraBR = new Date().toLocaleString('pt-br');
console.log(dataeHoraBR);

//Pegar apenas a data BR
let dataBR = new Date().toLocaleDateString('pt-br');
console.log(dataBR);
//ou let dataBR = new Date().toLocaleString('pt-br', {dateStyle: 'short'});

//Pegar apenas hora BR
let HoraBR = new Date().toLocaleTimeString('pt-br');
console.log(HoraBR);
//ou (sem segundos) let HoraBR = new Date().toLocaleString('pt-br', {timeStyle: 'short'});

//Pegar valores separados e juntar
{   
    let d = new Date();
    let dia = d.getDate();
    let mes = d.getMonth();
    let ano = d.getFullYear();
    let mesesAno = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dataCompleta = dia + '/' + mesesAno[mes] + '/' + ano ;
    console.log(dataCompleta);
}

//Comparar datas
var hoje = new Date();
var vencimento = new Date(2024, 1, 20);
//detalhe: no var vencimento usamos o padrão js em que 0 é jan, 1 é fev...

if(hoje > vencimento) {
    console.log('Sua conta está vencida!');
} else {
    console.log('Ainda não venceu!');
};



//Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
// devemos usar getTime() para uma coversão em milissegundos

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60* 1000));
//Math.ceil arredonda e a conta converte milissegundos para dias
console.log(diferencaDias + ' dias');