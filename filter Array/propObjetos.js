const pessoas = [
    {nome: 'Marcos', Idade: 30},
    {nome: 'Raquel', Idade: 19},
    {nome: 'Mara', idade: 40},
    {nome: 'Mauricio', idade:25},
    {nome: 'Renato', idade:55}
]

const mais30 = pessoas.filter(valor => valor.idade > 30)

console.log(mais30);