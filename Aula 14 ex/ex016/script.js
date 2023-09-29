function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value === '' || passo.value === '') { 
        window.alert('Preencha todos os valores')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido')
            p = 1
        }
        
        if(i < f){
            for(let c = i; c <= f; c += p) { 
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

        
    
        
    
    
}
