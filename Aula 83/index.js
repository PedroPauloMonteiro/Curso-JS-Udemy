class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
        console.log(this.nome + ' foi ligado')
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
        console.log(this.nome + ' foi desligado')
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


class Tablet extends Smartphone {}

const s1 = new Smartphone('Iphone', 'Preto', 'Iphone 15');
//s1.ligar();
//console.log(s1);

const t1 = new Tablet('Samsung', 'Branco', 'S10');
t1.desligar();
console.log(t1);