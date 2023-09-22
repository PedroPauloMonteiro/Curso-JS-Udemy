function criepessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criepessoa('Pedro', 'Rocha', 18)
console.log(typeof pessoa1.idade)
