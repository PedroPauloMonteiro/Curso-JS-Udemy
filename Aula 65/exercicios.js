const numeros = []

for(let c = 0; c <= 10; c++) {
    let num = Math.floor(Math.random() * 7) + 1;
    numeros.push(num)
}

console.log(numeros);

const pares = numeros.filter(val => val % 2 ===0)

//console.log(pares);*/

/*const nomes = ['Pedro', 'Paulo', 'João', 'Gabriel', 'Fernanda', 'Maria', 'Felipe', 'Marcia', 'Manoel']

const maiorQ5 = nomes.filter(val => val.length > 5);

console.log(maiorQ5);*/

/*const pessoas = [
    {nome: 'Pedro', idade: 18},
    {nome: 'Paulo', idade: 10, nacionalidade: 'Brasileiro'},
    {nome: 'Maria', idade:55},
    {nome: 'Francisca', idade: 25, nacionalidade: 'Espanhola'}
];

const pessoasComNacionalidade = pessoas.filter(val => val.nacionalidade)

console.log(pessoasComNacionalidade);*/

/*const numerosMaiorq20 = numeros.filter(val => val > 20);
console.log(numerosMaiorq20);*/

/*let val2 = []
const elUnicos = numeros.filter((val) => {
    if (!val2.includes(val)) {
        val2.push(val)
        return val
    }
})

console.log(elUnicos);*/

