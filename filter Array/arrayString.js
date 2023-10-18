function arrayFiltrado(string, n) {
    const novoArray = string.filter( valor => valor.length > n)
    console.log(novoArray);
}

const nomes = ['Pedro', 'Paulo', 'Cleberson', 'Williams', 'Jhonatam', 'Raquel', 'Mariana', 'Giovanna'];
arrayFiltrado(nomes, 7);