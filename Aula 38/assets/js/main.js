const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p')

function addStyle() {
for (let valor of p) {
   console.log(valor)
   let element = valor
   element.style.backgroundColor = 'rgb(17, 86, 102)'
   element.style.color = 'white'
}}