function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100))
};


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function(valor) {
            if(valor !== 'number') return;
            return estoque = valor
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const camisa = new Camiseta('Regata', 7.5, 'Preta');
camisa.aumento(100);

const caneca1 = new Caneca('Caneca do Flamengo', 12, 'Plastico', 5)
console.log(camisa);
console.log(caneca1);
console.log(caneca1.estoque)