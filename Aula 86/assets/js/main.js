//Para resolver o problema dos usuario é necessario Usar uma expressão regular, porem a forma que usei está incorreta. Aprenda uma forma de utiliza-la no if
const botao = document.getElementById('botao');
botao.addEventListener('click', (e) => {
    e.preventDefault();
    class VerificaInputs {
        constructor() {
            this.nome = document.getElementById('inome').value;
            this.sobrenome = document.getElementById('isobrenome').value;
            this.cpfInput = document.getElementById('icpf').value;
            this.cpfLimpo = this.cpfInput.replace(/\D+/g, '');
            this.usuario = document.getElementById('iusu').value;
        }

        verifica() {
            this.verficaNome();
            this.verificaSobrenome();
            this.verificaCpf();
            this.verificaUsu();
        }

        verficaNome() {
            if(this.nome.length ===0) {
                const divErro = document.getElementById('nome-error');
                let pErro = document.createElement('p')
                pErro.style.color = 'red'
                pErro.style.fontSize = '14px'
                pErro.innerHTML = 'O Campo "Nome" não pode estar vazio!'
                divErro.appendChild(pErro);
            }
            return;
        
        }

        verificaSobrenome() {
            if(this.sobrenome.length === 0) {
                const divErro = document.getElementById('sobrenome-error');
                let pErro = document.createElement('p')
                pErro.style.color = 'red'
                pErro.style.fontSize = '14px'
                pErro.innerHTML = 'O Campo "Sobrenome" não pode estar vazio!'
                divErro.appendChild(pErro);
            }
            return;
        }

        verificaCpf() {
            if(this.cpfLimpo.length === 0 || this.cpfLimpo.length < 11) {
                const divErro = document.getElementById('cpf-error');
                let pErro = document.createElement('p')
                pErro.style.color = 'red'
                pErro.style.fontSize = '14px'
                pErro.innerHTML = 'O Campo "CPF" não pode estar vazio!'
                divErro.appendChild(pErro);
            }

           if(this.isSequencia()) {
                const divErro = document.getElementById('cpf-error');
                let pErro2 = document.createElement('p')
                pErro2.style.color = 'red'
                pErro2.style.fontSize = '14px'
                pErro2.innerHTML = 'CPF Invalido!'
                divErro.appendChild(pErro2);
           }
           let cpfArray = Array.from(this.cpfLimpo);
           cpfArray = cpfArray.slice(0, -2)
           const digito1 = this.somaCPF(cpfArray);
           cpfArray.push(digito1);
           const digito2= this.somaCPF(cpfArray);
           cpfArray.push(digito2);
           let cpfString = cpfArray.join(', ');
           cpfString = cpfString.replace(/\D+/g, '')
           if (cpfString !== this.cpfLimpo) {
            const divErro = document.getElementById('cpf-error');
            let pErro2 = document.createElement('p')
            pErro2.style.color = 'red'
            pErro2.style.fontSize = '14px'
            pErro2.innerHTML = 'CPF Invalido!'
            divErro.appendChild(pErro2);
           } else {
                return;
           }
        }

        isSequencia() {
            const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
            return sequencia === this.cpfLimpo;
        }

        somaCPF(cpf) {
            let mult;
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
            let digito = 11 - (total % 11);
            if(digito >= 10) digito = 0
            return digito;
        }

        verificaUsu() {
            let usuArray = Array.from(this.usuario);
            let expressao = (/^[a-zA-Z0-9]+$/)
            for (typeof c === expressao) {
                if (typeof c == 'symbol') {
                    console.log('Chegou aqui')
                    const divErro = document.getElementById('usu-error');
                    let pErro2 = document.createElement('p')
                    pErro2.style.color = 'red'
                    pErro2.style.fontSize = '14px'
                    pErro2.innerHTML = 'Usuario Invalido! Use apenas letras(a, b, c...) ou numeros(1, 2, 3...)'
                    divErro.appendChild(pErro2);
                    return;
                }
            }

            if(this.usuario < 3 || this.usuario > 12) {
                const divErro = document.getElementById('usu-error');
                let pErro2 = document.createElement('p')
                pErro2.style.color = 'red'
                pErro2.style.fontSize = '14px'
                pErro2.innerHTML = 'Usuario precisa ter entre 3 e 12 caracteres!'
                divErro.appendChild(pErro2);
                return;
            }
        }
    }

    const verificacao = new VerificaInputs();
    verificacao.verifica();
})