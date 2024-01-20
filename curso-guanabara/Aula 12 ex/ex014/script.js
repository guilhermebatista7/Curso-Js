function carregar() {
    var msg = window.document.querySelector('div#msg')
    var foto = window.document.querySelector('img#imagem')  
    var data = new Date()
    var minute = data.getMinutes()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = 'manha.png'
        document.body.style.background = 'brown' //cor de fundo
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        foto.src = 'tarde.png'
        document.body.style.background = '#7ca48a'
    } else {
        //boa noite
        foto.src = 'noite.png'
        document.body.style.background = '#3d1c32'
    }
    
    
}
