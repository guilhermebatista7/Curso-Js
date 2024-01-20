function gerar() {
    var valor = document.getElementById('num')
    var tab = document.getElementById('tab')
    if (valor.value === '') {
        alert('Digite um valor para a tabuada')
    } else {
        let n = Number(valor.value)
        let c = 1
        tab.innerHTML='' /* Usamos isso para evitar que tabuadas antigas apareçam */
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}