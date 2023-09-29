let num = document.getElementById('valores')
let tabela = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf (Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        tabela.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() {
    let val = valores.sort()
    res.innerHTML =  
    `Ao todo, temos ${valores.length} número(s) cadastrados <br>
    O maior valor informado foi ${val[val.length-1]} <br>
    O menor valor informado foi ${val[0]} <br>`
    
    let soma = 0
    for (let i = 0; i < valores.length; i++){
        soma += valores [i]
    }
    res.innerHTML += `Soma dos valores é ${soma} <br>`

    let media = (soma/valores.length).toFixed(2)
    res.innerHTML += `Média dos valores é ${media}`
}