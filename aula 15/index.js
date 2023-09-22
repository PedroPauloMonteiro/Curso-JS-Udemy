let num = window.prompt('Digite um Numero:')
num = Number(num)
console.log(typeof num)
document.body.innerHTML = `<h1>Seu número é ${num}</h1>`
document.body.innerHTML += `<p>Raiz Quadrada: ${num ** 0.5}</p>`
document.body.innerHTML += `<p>${num} é Inteiro: ${Number.isInteger(num)}</p>`
document.body.innerHTML += `<p>É NaN: ${isNaN(num)} </p>`
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}`
document.body.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(num)}</p>`
document.body.innerHTML +=  `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`

