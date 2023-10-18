let numeros = []
for (let c = 0; c < 10; c++) {
    numeros.push(Math.floor(Math.random() * 10) + 1);
}

console.log(numeros);

const pares = numeros.filter(valor => valor%2 ===0)

console.log(pares);