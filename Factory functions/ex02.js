function criaProduto(nome, preco, descricao) {
    return {
        nome,
        preco,
        descricao,
    }
}

function showProduto(produto) {
    console.log(`${produto.nome} por ${produto.preco}R$. ${produto.descricao}`);
}

const product1 = criaProduto('Bola de Futebol', 80, 'Bola de futebol para campo e quadra');
const product2 = criaProduto('Maquiagem', 100, 'Maquiagem para o rosto');
showProduto(product1);
showProduto(product2);