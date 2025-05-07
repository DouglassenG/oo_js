function Cachorro(nome) {
    this.nome = nome;
    this.latir = function() {
        console.log(this.nome + " latiu para ele.");
    }
}

function Gato(nome, raca, peso) {
    this.raca = raca;
    this.peso = peso;
    
    Cachorro.call(this, nome);
}

const cachorro1 = new Cachorro("Tito");
const gato1 = new Gato("Mel", "Siamês", "4kg");
const gato2 = new Gato("Lili", "Persa", "3kg");
cachorro1.latir();

console.log(cachorro1);
console.log(gato1);
console.log(gato2);



