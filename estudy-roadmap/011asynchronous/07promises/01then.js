//Criação promessa
const myPromise = new Promise((resolve, reject)=>{
    const nome = 'Guilherme';

    if(nome === 'Guilherme'){
        resolve('Usuário encontrado')
    } else{
        reject('Usuário não encontrado')
    }
})

myPromise.then((data)=>{
    console.log(data)
});