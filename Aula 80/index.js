const pessoas = [
    {Id: 3, nome: 'Luiz'},
    {Id: 2, nome: 'Maria'},
    {Id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {Id} = pessoa;
    console.log(Id)
    novasPessoas.set(Id, {...pessoa});
}
console.log(novasPessoas);