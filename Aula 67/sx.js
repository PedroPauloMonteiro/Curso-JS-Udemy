const numbers = [1, 2, 3, 4];

const total = numbers.reduce((ac, val) => ac += val);
//console.log(total);

const produto = numbers.reduce((ac, val) => ac *= val);
//console.log(produto);

const strings = ['ola', 'Tudo', 'Bem', '?']
const concatenando = strings.reduce((ac, str) => `${ac} ${str}`)
//console.log(concatenando);

const multidimensionalArray = [[1, 2, 3], [4, 5], [6, 7, 8]];
const unidimensional = multidimensionalArray.reduce((ac, val) => ac.concat(val), [])
//console.log(unidimensional);

const words = ['apple', 'orange', 'banana', 'apple', 'banana', 'grape', 'orange', 'grape', 'grape'];

const wordCount = words.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

//console.log(wordCount);

