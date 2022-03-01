class Ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = velocidad
        this.fuerza = fuerza
    }
    sayName(){
        console.log(`Me llamo ${this.nombre}`);
    }
    showStats(){
        console.log(`${this.nombre}, ${this.fuerza}, ${this.velocidad}, ${this.salud}`)
    }
    drinkSake(){
        this.salud += 10;
        console.log(`${this.salud}`)
    }
} 

const ninja1 = new Ninja("Hyabusa", 20, "10m/s", "30Newtons");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();