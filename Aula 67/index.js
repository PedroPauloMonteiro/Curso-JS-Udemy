const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((ac, val) => ac += val);

//console.log(total);

const pessoas = [
    {nome : 'Luiz', idade: 18},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 10},
    {nome : 'Rosana', idade: 64},
    {nome : 'Wallace', idade: 63}
];

const maisVelha = pessoas.reduce((ac, val) => {
    if(val.idade > ac.idade) ac = val;
    return ac
});

console.log(maisVelha);