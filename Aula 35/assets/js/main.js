const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]
//Para pegar os elementos do array
function getElementsAndText() { 
    for (i = 0; i < elementos.length; i++) {
        let getTag = elementos[i].tag
        let getTxt = elementos[i].texto
        addTagAndText (getTag, getTxt)
    }
}
//Para adcionar as tags e textos dentro do documento HTML
function addTagAndText (tag, text) {
    let element = document.createElement(tag)
    document.getElementById('block').appendChild(element)
    element.innerHTML = text
    return element
}