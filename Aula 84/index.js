class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log('Trocou a Pilha')
    }
}

const contole1 = new ControleRemoto('Sansumg');
contole1.aumentarVolume();
contole1.aumentarVolume();
contole1.aumentarVolume();
console.log(contole1);
ControleRemoto.trocaPilha();