const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer () {
        console.log(`${this.nome} está comendo`)
    }
}


const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}





function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {...falar, ...beber, ...comer}     
    return Object.create(pessoaPrototype, {
        nome:{value: nome,
        enumerable: true},
        sobrenome: {
            value:sobrenome,
            enumerable: true
        }
    })
}



const p1 = criaPessoa('Pedro', 'Paulo')
p1.beber();