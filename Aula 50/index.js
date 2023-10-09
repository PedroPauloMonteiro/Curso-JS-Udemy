/*function funcao() {
    let total = 0
    for ( let argumento of arguments) {
        total += argumento
    }
    console.log(total )
}

funcao(0, 1, 2, 3, 4); */

/*function funcao(a, b=2, c=4) {
    console.log(a + b + c)
}

funcao(2, undefined, 20) */

/*function funcao({nome, idade}) {
    console.log(nome, idade)
}

funcao({nome: 'Pedro', sobrenome: 'Paulo', idade: 18});*/

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}

conta('/', 2, 10, 20, 30, 40)