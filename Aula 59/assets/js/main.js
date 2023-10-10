function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');


    this.inicia = function () {
      this.cliqueBotoes();
      this.pressionaEnter();
    }

    this.pressionaEnter = function() {
      this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) {
          this.realizaConta();
        }
      });
    }

    this.cliqueBotoes = function() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      }.bind(this))
    }

    this.btnParaDisplay = function(valor) {
      this.display.value += valor;
    }

    this.clearDisplay = function() {
      this.display.value = '';
    }

    this.apagaUm = function() {
      this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = function() {
      let conta = this.display.value

      try {
        conta = eval(conta);

        if(!conta) {
          alert('conta Invalida!')
          return
        }

        this.display.value = conta;
      } catch (e) {
        alert('conta Invalida!');
        return;
      }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();