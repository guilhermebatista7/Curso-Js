//Encadeamento de then's

const upperPromise = new Promise((resolve, reject)=>{
    const nome = 'Yasmin';

    if(nome === 'Yasmin'){
        resolve('Usuário encontrado')
    } else{
        reject('Usuário não encontrado')
    }
})

upperPromise
    .then((mensagem)=>{
        return mensagem.toUpperCase();
    }) .then((stringModificada)=>{
        console.log(stringModificada)
    })


