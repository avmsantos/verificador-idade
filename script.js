function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')

    var resultado = document.querySelector('div#resultado')

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-h.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-m.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img) //para aparecer as imagens
    }
}