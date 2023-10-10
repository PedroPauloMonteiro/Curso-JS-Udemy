/*function soma(a, b, callback) {
    console.log('Numeros recebidos, a soma irá ocorrer...')
    setTimeout(function()  {
        let result = a + b
        callback(result)
    }, 4000);
}

function resultado(result) {
    console.log(`O resultado da soma foi ${result}`)
}

soma(10, 5, resultado);
----------------------------------------------------------------------------------


function getNumber(num = 10, callback) {
    if (num > 0) {
        setTimeout(function() {
            console.log(num)
            callback(num);
        }, 1000)
    } else {
        console.log(num)
        return
    }
}

function getOne(num) {
    num--
    getNumber(num, getOne)
}

getNumber(30, getOne);
----------------------------------------------------------------------------------

function acordar(callback) {
    setTimeout (function() {
        console.log('Acordar')
        callback();
    }, 3000)
}
function escovarDentes(callback) {
    setTimeout (function() {
        console.log('Escovar meus dentes')
        callback();
    }, 3000)
}
function tomarCafe(callback) {
    setTimeout (function() {
        console.log('Tomar Café')
        callback();
    }, 3000)
}
function trabalhar(callback) {
    setTimeout (function() {
        console.log('Ir Trabalhar')
        callback();
    }, 3000)
}

acordar(acordarCB);

function acordarCB() {
    escovarDentes(escovarDentesCB);
}

function escovarDentesCB() {
    tomarCafe(tomarCafeCB);
}

function tomarCafeCB() {
    trabalhar(trabalharCB)
}

function trabalharCB() {
    console.log('Manhã completa!')
}
*/