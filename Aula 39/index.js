function randomN(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = randomN(min, max);
/*
while (rand !== 10) {
    rand = randomN(min, max)
    console.log(rand)
}
*/

do {
    rand = randomN(min, max)
    console.log(rand)
} while(rand !== 10);