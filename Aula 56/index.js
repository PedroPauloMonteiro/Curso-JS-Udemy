function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        
        },
        
        fala(assunto = 'Falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },
        
        altura,
        peso,
        
        get imc() {
            let indice = this.peso / (this.altura ** 2).toFixed(2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Pedro', 'Paulo', 1.70, 80);
p1.nomeCompleto = 'Jose Ricardo Miranda'
console.log(p1.nomeCompleto);
console.log(p1.fala())


 