/*const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Rocha'
}
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);*/

/*const pessoa = new Object();
pessoa.nome = 'Pedro Paulo';
pessoa.sobrenome = 'Monteiro Rocha';
pessoa.idade = 18;
pessoa.falarNome = function() {
    console.log(`${this.nome} está falando seu nome`)
};
pessoa.getDataNascimento = function() {
    const ano = new Date();
    const anoAtual = ano.getFullYear();
    console.log(`${this.nome} nasceu em ${anoAtual - this.idade}`)
}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}*/

/*function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Pedro', 'Paulo');
console.log(p1.nomeCompleto());*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

const p1 = new Pessoa('Pedro', 'Paulo');
//Object.freeze(p1);
p1.nome = 'Paulo'
console.log(p1);