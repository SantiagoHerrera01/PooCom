//clase/
class perrito {
    constructor(nombre,edad,raza) {
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;
        this.energia= 100;
    }


saltar() {
    this.energia = this.energia - 5;
    console.log(`El perrito: ${this.nombre} acaba de saltar`);
    console.log(
      `El perrito: ${this.nombre} tiene ahora ${this.energia} luego de saltar.`
    );
  }


correr() {
    if(this.energia < 20) {
        alert (
        `El perrito ${this.nombre} esta muy cansado para correr :(, debes alimentarlo)`
    );
    return;
}
    this.energia=this.energia - 20;
    console.log(`El perrito: ${this.nombre} acaba de correr`)
    console.log(
        `El perrito: ${this.nombre} tiene ahora ${this.energia} puntos despues de correr `
    );
}
alimentar(alimento) {
    if(this.energia + alimento.calorias > 100) {
        alert ("Ups, el perrito no puede comer mas, esta lleno");
        return
    }
    this.energia = this.energia + alimento.calorias;
    console.log(
        `El perrito: ${this.nombre}, tiene ${this.energia} puntos de energia luego de comer ${alimento.nombre}.`
    );
}
}


class comida {
    constructor(nombre,calorias){
        this.nombre = nombre;
        this.calorias = calorias;
    }
}

let perritouno = new perrito("2pac",2,"pitbull");

let purina = new comida ("Purina", 15);

console.log(perritouno);
console.log(purina);