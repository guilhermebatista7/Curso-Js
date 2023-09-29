function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')
    if (fano.length == 0 || fano > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //fsex[0] é masculino e fsex[1] é feminino, pela ordem.
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto.png')
            }else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulta.png')
            }else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML=(`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}