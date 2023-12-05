class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable : false,
            enumerable : false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos) {
            total += Number(stringNumerica) * reverso
            reverso--
        }
        let digito = 11 - (total % 11);
        if(digito >= 10) digito = 0;
        return String(digito);
    }

    
}

const validaCpf = new ValidaCPF('070.987.720-03');
if(validaCpf.valida()) {
    console.log('CPF Valido')
} else {
    console.log('CPF Invalido')
};