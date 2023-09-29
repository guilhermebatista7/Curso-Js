function calcular(){  
let num = parseInt(document.getElementById('val').value)
let res = document.getElementById('res')
let resultado = 1
    for(var count = 1; count<=num;count++){
        resultado *= count
    }
    res.innerHTML = (`Fatorial de ${num} é ${resultado}`)
}    
