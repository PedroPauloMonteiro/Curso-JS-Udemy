function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
};

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === undefined) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let mult = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (Number(val) * mult)
        mult--
        return ac
    }, 0)
    let digito = 11 - (total % 11)
    if(digito >=10) digito = 0
    return digito
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};


const cpf = new ValidaCPF('705.484.450-52');
if (cpf.valida()) {
    console.log('CPF Valido')
} else {
    console.log('CPF Invalido')
}

//705.484.450-52