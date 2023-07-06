function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.legth == 0 || Number(fano.value) > ano) {
        window.alert( '[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                genero = 'um Menino'
                img.setAttribute('src', 'criança-masc.png')
            } else if (idade < 21){
                genero = 'um Jovem'
                img.setAttribute('src', 'jobem-masc.png')
            } else if (idade < 45){
                genero = 'um Adulto'
                img.setAttribute('src', 'adulto-masc.png')
            } else if (idade > 45){
                genero = 'um Idoso'
                img.setAttribute('src', 'veio-masc.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                genero = 'uma Menina'
                img.setAttribute('src', 'criança-fem.png')
            } else if (idade < 21){
                genero = 'uma Jovem'
                img.setAttribute('src', 'jovem-fem.png')
            } else if (idade < 45){
                genero = 'uma Adulta'
                img.setAttribute('src', 'adulta-fem.png')
            } else if (idade > 45){
                genero = 'uma Idosa'
                img.setAttribute('src', 'veia-fem.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}