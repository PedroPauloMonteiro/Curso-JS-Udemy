
/*function fazerCafe(callback) {
    console.log("Colocando a água para ferver...");
    setTimeout(function() {
      console.log("Água fervida!");
      callback(); // Chama o callback quando a água ferveu.
    }, 2000); // Espera 2 segundos (simulando a fervura da água)
  }
  
  function fazerCafeDepoisDeFerver() {
    console.log("Fazendo café!");
  } 
  
  fazerCafe(fazerCafeDepoisDeFerver);
  -----------------------------------------------------------------------------------------
 

  function acordar(callback) {
    console.log('Acabei de acordar')
    setTimeout(function() {
        callback();
    }, 3000)
  }

  function escovarOsDentes() {
    console.log('Escovar os dentes')
    irTrabalhar();
  }

function irTrabalhar() {
    console.log('Ir Trabalhar')
}

acordar(escovarOsDentes);
----------------------------------------------------------------------------------

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        callback();
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo!')
}
*/
  
