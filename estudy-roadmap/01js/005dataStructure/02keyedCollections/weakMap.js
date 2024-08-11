let informacoesUsuario = new WeakMap();

function addInformacaoUsuario(usuario, informacoes) {
    informacoesUsuario.set(usuario, informacoes);
}

let usuario1 = {nome: "Guilherme"};
let usuario2 = {nome: "Yasmin"};

addInformacaoUsuario(usuario1, {idade: 18, altura:1.82});
addInformacaoUsuario(usuario2, {idade: 18});

function obterInformacoesUsuario(usuario){
    return informacoesUsuario.get(usuario);
}

console.log(usuario1.nome, obterInformacoesUsuario(usuario1));
console.log(usuario2.nome, obterInformacoesUsuario(usuario2))