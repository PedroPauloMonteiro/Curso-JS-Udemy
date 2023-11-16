/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((ac, val) => {
    if(val%2===0) ac += val;
    return ac
},0);
console.log(total);*/


const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 64},
    {nome : 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce((ac, val) => {
    if (ac.idade > val.idade) return ac;
    return val;
});

console.log(maisVelha);
