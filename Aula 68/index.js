const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(val => val % 2 === 0)
.map(val => val *= 2)
.reduce((ac, val) => ac += val);
console.log(numerosPares);

