
let valores = [8,1,4,3,5,6]
valores.sort()

/*
for(let val=0; val<valores.length;val++) {
    console.log(`A posição ${val} tem o valor ${valores[val]}`)
}
*/

for(let val in valores) {
    console.log(`A posição ${val} tem o valor ${valores[val]}`)
}