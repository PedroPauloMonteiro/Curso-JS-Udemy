const numeros = []

for(let c = 0; c <= 10; c++) {
    let num = Math.floor(Math.random() * 30) + 20;
    numeros.push(num)
}

console.log(numeros);

const dobro = numeros.map(val => val * 2)

//console.log(dobro);

const Fahrenheit = numeros.map(val => (val - 32) * 5/9);
//console.log(Fahrenheit);

const frase = 'o flamengo é o maior clube do mundo';

const fraseArray = frase.split(' ').map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
})

//console.log(fraseArray);

const numerosPares = numeros.map((val)=> {
    if (val%2===0) {
        return val;
    }
})

//console.log(numerosPares);

const pessoas = [
    {Nome: 'Pedro', idade: 18},
    {Nome: 'Marcia', Idade:45},
    {Nome: 'Clara', Idade: 22}
]

const nomesObjects = pessoas.map(val => val.Nome)

//console.log(nomesObjects);
