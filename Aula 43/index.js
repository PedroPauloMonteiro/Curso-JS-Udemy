function fizzBuzz(n) {
    if (typeof n !== "number") {
        return ('VALOR INVALIDO!')
    }
    if (n % 3===0 && n % 5 ===0) {
        return 'FizzBuzz'
    } else if (n % 3===0 ||n % 5 ===0) {
        return 'Fizz'
    }
    return n
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

/*function isNumber(n) {
    return typeof n === 'number' 
}

function Divi53(n) {
    if (n%3 === 0 && n%5 ===0) return `${n} FizzBuzz`;
    if(n%3 ===0) return `${n} Fizz`;
    if(n%5===0) return `${n} Buzz`;
    return n
}

for (let i=0; i <= 100; i++) {
    if (isNumber(i) === true) {
        console.log(Divi53(i))
    }
} */