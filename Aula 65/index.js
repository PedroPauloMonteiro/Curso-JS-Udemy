/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter( valor => valor > 10);
console.log(numerosFiltrados);*/

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallace', idade: 47}
]

const letrasMais5 = pessoas.filter( valor => valor.nome.length >= 5)

const mais50 = pessoas.filter(valor => valor.idade > 50)

const fimA = pessoas.filter( valor => valor.nome.toLowerCase().endsWith('a'))


console.log(letrasMais5);
console.log(mais50);
console.log(fimA);