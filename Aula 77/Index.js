let cpf = '070.987.720-03'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo);
cpfArray.splice(9, 2)

function soma(cpf) {
    if (cpf.length === 9) {
        mult = 10
    } else {
        mult = 11
    }
    const total = cpf.reduce((ac, val) => {
        ac = ac + (Number(val) * mult)
        mult--
        return ac
    }, 0)
    showDigito(total);
}

function showDigito(tot) {
    let digito = 11 - (tot % 11);
    if(digito >= 10) digito = 0;
    cpfArray.push(String(digito));
    if (cpfArray.length === 11) return;
    soma(cpfArray);
}  

soma(cpfArray);
let StringComparacao = cpfArray.join(', ');
StringComparacao = StringComparacao.replace(/\D+/g, '')
if(StringComparacao === cpfLimpo) {
    console.log('CPF VALIDO');
} else {
    console.log('CPF INVALIDO');
}

console.log(StringComparacao)
console.log(cpfLimpo)
