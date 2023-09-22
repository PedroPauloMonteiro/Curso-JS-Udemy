function calcular() {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let resposta = document.getElementById('resposta')
    resposta.classList.remove('hide')
    if (peso.value.length === 0) {
        resposta.style.backgroundColor = 'rgb(244, 76, 76)'
        resposta.innerHTML = 'Peso Invalido'
        return
    } else if (altura.value.length === 0) {
        resposta.style.backgroundColor = 'rgb(244, 76, 76)'
        resposta.innerHTML = 'Altura Invalida'
        return
    } else {
        altura = Number(altura.value)
        peso = Number(peso.value)
    }

    if (peso >= 600 || peso < 25) {
        resposta.style.backgroundColor = 'rgb(244, 76, 76)'
        resposta.innerHTML = 'Peso Invalido. Digite o seu Peso real!'
        return
    } else if ( altura > 3 || altura < 0.45) {
        resposta.style.backgroundColor = 'rgb(244, 76, 76)'
        resposta.innerHTML = 'Altura Invalida. Digite a sua altura real!'
        return
    }

    let IMC = peso / (altura * altura)
    IMC = IMC.toFixed(1)
    if (IMC < 18.5) {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está abaixo do Peso.`
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está no peso ideal.`
    } else if (IMC >= 25 && IMC <= 29.9) {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está com Sobrepeso.`
    } else if (IMC >= 30 && IMC <= 34.9) {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está com Obesidade Grau 1.`
    } else if (IMC >= 35 && IMC <= 39.9) {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está com Obseidade Grau 2.`
    } else {
        resposta.innerHTML = `Seu IMC é de ${IMC}. Você está com Obesidade Grau 3.`
    }
}