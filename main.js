function Animal(nome, racaEspecie, peso) {
    this.nome = nome;
    this.racaEspecie = racaEspecie;
    this.peso = peso;
}

const cachorro = new Animal("Tito", "Pastor-alemão", "23kg");
const gato = new Animal("Mel", "Siamês", "4kg");
const ave = new Animal("Kikito", "Calopsita", "0.5kg");


console.log(cachorro);
console.log(gato);
console.log(ave);



