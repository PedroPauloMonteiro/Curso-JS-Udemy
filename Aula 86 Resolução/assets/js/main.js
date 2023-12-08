class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulario enviado.')
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirSenha');
        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'A senha deve conter entre 6 e 12 caracteres');
        } 
        return valid;
    }

    camposSaoValidos() {
        let valid = true;
        let expressao = (/^[a-zA-Z0-9]+$/)

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
                valid = false
            }

            if(campo.classList.contains('cpf')) {
              if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(campo.value.length < 3 || campo.value.length > 12) {
                    valid = false;
                    this.criaErro(campo, 'Usuario deve conter entre 3 e 12 caracteres!');
                } 
                if(!expressao.test(campo.value)) {
                    valid = false;
                    this.criaErro(campo, 'Usuario deve conter apenas letras e/ou numeros');
                }
            }
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido')
        }
        return true;
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();