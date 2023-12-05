let mult;
class validandoCpf {
    constructor(cpf, cpfComparacao) {
        this.cpf = cpf;
        this.cpfComparacao = cpfComparacao;
        this.soma();
    }
    soma() {
        if (this.cpf.length === 9) {
            mult = 10
        } else {
            mult = 11
        }
        const total = this.cpf.reduce((ac, val) => {
            ac = ac + (Number(val) * mult)
            mult--
            return ac
        }, 0)
        this.showDigito(total);
    }

    showDigito(tot) {
        let digito = 11 - (tot % 11);
        if(digito >= 10) digito = 0;
        this.cpf.push(String(digito));
        if (this.cpf.length === 11) {
            this.validarCpf();
            return;
        }
        this.soma();
    }

    validarCpf() {
        let StringComparacao = this.cpf.join(', ');
        StringComparacao = StringComparacao.replace(/\D+/g, '')
        if(StringComparacao === this.cpfComparacao) {
            console.log('CPF VALIDO');
        } else {
            console.log('CPF INVALIDO');
        }
        console.log(StringComparacao);
        console.log(this.cpfComparacao);
        return;
    }
}

let cpf = '070.987.720-03'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo);
cpfArray.splice(9, 2)

const cpf1 = new validandoCpf(cpfArray, cpfLimpo);