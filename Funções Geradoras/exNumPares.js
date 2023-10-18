function* numPar(c) {
    for(let c = 0; c <= 10; c += 2) {
        yield c
    }
}

const par = numPar();
const primeiroValor = par.next().value;
const segundoValor = par.next().value;
const terceiroValor = par.next().value;

console.log(primeiroValor)
console.log(segundoValor)
console.log(terceiroValor)