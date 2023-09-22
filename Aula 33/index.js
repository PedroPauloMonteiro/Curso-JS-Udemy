const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Rocha',
    idade: 18,
    endereco: {
        rua: 'Rua conceicao da Barra',
        numero: 371
    }
}

const {nome, ...resto} = pessoa
console.log(resto)