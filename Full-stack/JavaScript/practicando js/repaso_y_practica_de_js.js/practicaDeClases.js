class Personaje{
    constructor(nombre, nivel, habilidad, agilidad, fuerza){
        this.nombre = nombre,
        this.habilidad = habilidad,
        this.nivel = nivel,
        this.agilidad = agilidad,
        this.fuerza = fuerza
    }

    sumarNivel(numero){
        this.nivel += numero
    }
    sumarAgilidad(numero){
        this.agilidad += numero
    }
    sumarFuerza(numero){
        this.fuerza += numero
    }
}

var daniel = new Personaje('Daniel', 10, 'Magia', 10, 50)
var Samuel = new Personaje('Samuel', 10, 'Magia', 10, 60)

console.log(daniel)
daniel.sumarNivel(10)
console.log(daniel.nivel)