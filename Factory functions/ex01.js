function criaPessoa(nome, idade, cidade) {
    return {
        nome,
        idade,
        cidade,
        get falaPessoa() {
            console.log(`${this.nome} de ${this.idade} anos mora em ${this.cidade}`)
        }
    }
}

const pes1 = criaPessoa('Pedro', 18, 'Montanha')
pes1.falaPessoa