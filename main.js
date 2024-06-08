// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    dirigir() {
        console.log(`Dirigindo o ${this.marca} ${this.modelo}`);
    }
}

// Classes herdeiras
class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
    }

    buzinar() {
        console.log("Bibibibi!");
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log("Empinando a moto!");
    }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", "vermelho");
const carro2 = new Carro("Honda", "Civic", "preto");
const moto1 = new Moto("Honda", "CBR500R", "500cc");

// Testando as instâncias
carro1.dirigir();
carro1.buzinar();

carro2.dirigir();
carro2.buzinar();

moto1.dirigir();
moto1.empinar();
