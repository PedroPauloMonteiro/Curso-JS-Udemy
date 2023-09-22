function dataHora() {
    const data = new Date ();
    let dia = data.getDay();
    let diaS = diaSemana(dia);
    let diaNumero = data.getDate();
    let mes = data.getMonth();
    let month = getMonth(mes);
    let year = data.getFullYear();
    let hour = data.getHours();
    let hora = add0(hour)
    let minutes = data.getMinutes();
    let minutos = add0(minutes)
    let resposta = document.getElementById('titulo')
    resposta.innerHTML = `${diaS}, ${diaNumero} de ${month} de ${year} ${hora}:${minutos}`
}

function diaSemana(dia){
    switch (dia) {
        case 0:
            return 'Domingo'
            break
        case 1:
            return 'Segunda-Feira'
            break
        case 2: 
            return 'Terça-Feira'
            break
        case 3:
            return 'Quarta-Feira'
            break
        case 4:
            return 'Quinta-Feira'
            break
        case 5:
            return 'Sexta-Feira'
            break
        case 6:
            return 'Sabado'
    }
}

function getMonth(mes) {
    switch (mes) {
        case 0:
            return 'Janeiro'
            break


        case 1:
            return 'Fevereiro'
            break

        case 2:
            return 'Março'
            break

        case 3:
            return 'Abril'
            break

        case 4:
            return 'Maio'
            break

         case 5:
            return 'Junho'
            break

        case 6:
            return 'Julho'
            break

        case 7:
            return 'Agosto'
            break

        case 8:
            return 'Setembro'
            break

        case 9:
            return 'Outubro'
            break

        case 10:
            return 'Novembro'
            break

        case 11:
            return 'Dezembro'
            break
    }
}

function add0 (num) {
    return num >= 10 ? num : `0${num}`
}