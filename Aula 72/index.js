function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor incorreto');
            }
            estoquePrivado = valor;
        },
        get: function() {
            return estoquePrivado;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    }
}

/*const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 80;
console.log(p1);
console.log(p1.estoque);*/

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa'
console.log(p2.nome);