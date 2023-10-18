function* fibonacci() {
    let a = 0
    let b = 1 
    let c;
    for(let contador = 3; contador <= 15; contador++) {
        c = a + b
        yield c
        a = b
        b = c
    }
}

const fib = fibonacci();
for(let c of fib) {
    console.log(c)
}