const produto = {nome: 'Caneca', preco: 1.80};
//console.log(Object.entries(produto))
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
const outraCoisa = Object.assign({}, produto);
outraCoisa.nome = 'Camisa'
//console.log(outraCoisa);
//console.log(produto);

