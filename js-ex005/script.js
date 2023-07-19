function verificar() {

    var data = new Date()
    var ano = data.getFullYear(data)
    var fano = document.getElementById('txtano')
    var tano = fano.value
    var kano = new Date(tano)
    var jano = kano.getFullYear(kano)
    var res = document.getElementById('res')
    var mesid = kano.getMonth() + 1
    var diaid = kano.getDate() + 1
    var diah = data.getDate() + 1
    var mesh = data.getMonth() + 1

    if (fano.value.legth == 0 || Number(jano.value) > ano) {
        window.alert( '[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - jano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

            

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                genero = 'um Menino'
                img.setAttribute('src', 'criança-masc.png')
                img.style.margin = '25px'
            } else if (idade < 21){
                genero = 'um Jovem'
                img.setAttribute('src', 'jobem-masc.png')
                img.style.margin = '25px'
            } else if (idade < 45){
                genero = 'um Adulto'
                img.setAttribute('src', 'adulto-masc.png')
                img.style.margin = '25px'
            } else if (idade > 45){
                genero = 'um Idoso'
                img.setAttribute('src', 'veio-masc.png')
                img.style.margin = '25px'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                genero = 'uma Menina'
                img.setAttribute('src', 'criança-fem.png')
                img.style.margin = '25px'
            } else if (idade < 21){
                genero = 'uma Jovem'
                img.setAttribute('src', 'jovem-fem.png')
                img.style.margin = '25px'
            } else if (idade < 45){
                genero = 'uma Adulta'
                img.setAttribute('src', 'adulta-fem.png')
                img.style.margin = '25px'
            } else if (idade > 45){
                genero = 'uma Idosa'
                img.setAttribute('src', 'veia-fem.png')
                img.style.margin = '25px'
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${diaid} anos`
        res.appendChild(img)
    }
}