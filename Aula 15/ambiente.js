let num = [5,8,9,3]
num.push(2)
console.log(num)
console.log(`Nosso vetor é o ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(num)
pos = num.indexOf(8)
if(pos == -1) {
    console.log('Valor não encontrado')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}