let numeros = [1, 2, 3, 4, 5];
let soma = 0;
numeros.forEach((val) => {
    return soma += val
});
//console.log(soma);

let nomes = ["Ana", "Carlos", "Eva", "David"];
//nomes.forEach(val => console.log(val));

let numeros2 = [2, 4, 6, 8, 10];
let dobrados = [];
numeros2.forEach(val => dobrados.push(val*2))
//console.log(dobrados);

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
numeros3.forEach(val => {if (val%2===0) return pares.push(val);})
//console.log(pares);

let palavras = ["javascript", "html", "css", "react"];
let maiusculas = [];
palavras.forEach(val => maiusculas.push(val.toUpperCase()))
//console.log(maiusculas);