const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

for (let x in pessoa){
    console.log(x, ':', pessoa[x])
}

let nums = [12, 45, 60];
  
for (let posicao in nums) {
    console.log(posicao, nums[posicao]);
}
  