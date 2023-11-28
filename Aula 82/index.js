const _velocidade = Symbol();
class Carro {
    constructor(nome,) {
        this.nome = nome;
        this[_velocidade] = 0;
    }


    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }


    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}


const c1 = new Carro('fusca')

for(let i = 0;i<=200; i++) {
    c1.acelerar();
}

console.log(c1);