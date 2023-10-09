const nome = 'Pedro';
function retornaFuncao() {
    return function() {
        return nome;
    };
}
const funcao = retornaFuncao();
console.log(funcao());