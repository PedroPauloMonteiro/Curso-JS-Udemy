const nome = 'Pedro Paulo'
const sobreNome = "Monteiro Rocha"
const idade = 18
const Peso = 80
const altura = 1.70
let imc = Peso / (altura * altura) 
let imcFormatado = imc.toFixed(2)
let anoNascimento = 2023 - idade

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${Peso} kg, tem ${altura} de altura e seu IMC é de ${imcFormatado}. ${nome} nasceu em ${anoNascimento}`)