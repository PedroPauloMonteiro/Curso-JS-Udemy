/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);*/

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47}
]

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor =>({idade: valor.idade}) );

const comIDs = pessoas.map((valor, indice) => {
    valor.id = indice;
    return valor
})

console.log(nomes);
console.log(idades);
console.log(comIDs);