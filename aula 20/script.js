
function cadastrar(nome, sobrenome, peso, altura) {
    return {nome, sobrenome, peso, altura}
}


function criar() {
    let nome = document.getElementById('inome').value
    let sobren = document.getElementById('isobre').value
    let peso = document.getElementById('ipeso').value
    let altura = document.getElementById('ialt').value
    let pessoa = cadastrar(nome, sobren, peso, altura)
    let bloco = document.getElementById('resposta')
    bloco.innerHTML += `<p>Nome: <strong>${pessoa.nome}</strong> Sobrenome: <strong>${pessoa.sobrenome}</strong> Peso: <strong>${pessoa.peso}kg</strong> Altura: <strong>${pessoa.altura}</strong></p>`

    console.log(pessoa)
}