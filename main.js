function Animal(nome, raca, peso) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
}

function Cachorro(nome, raca, peso) {
    Animal.call(this, nome, raca, peso);
}

function Gato(nome, raca, peso) {
    Animal.call(this, nome, raca, peso);
}

function Ave(nome, raca, peso) {
    Animal.call(this, nome, raca, peso);
}

const cachorro = new Cachorro("Tito", "Pastor-alemão", "23kg");
const gato = new Gato("Mel", "Siamês", "4kg");
const ave = new Ave("Kikito", "Calopsita", "0.2kg");

console.log(cachorro);
console.log(gato);
console.log(ave);



