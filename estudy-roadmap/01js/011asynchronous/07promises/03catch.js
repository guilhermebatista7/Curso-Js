//Retorno do catch

const mypromise3 = new Promise((resolve, reject)=>{
    const nome = 'João';

    if(nome === 'Guilherme'){
        resolve('Usuário encontrado (Guilherme)');
    } else{
        reject('usuário não encontrado');
    }
})

mypromise3.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('Aconteceu um erro: '+ err)
})
