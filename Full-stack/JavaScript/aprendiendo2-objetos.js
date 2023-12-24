const Personaje = {
    nombre: '',
    habilidad: 100,
    magia: 100,
    armadura: 100,
    elemento: '',

    sethabilidad(valor) {
        this.habilidad = valor
    },
    setmagia(valor) {
        this.magia = this.magia + valor
    },
    setarmadura(valor){
        this.armadura = valor
    },
    set elemento(valor){
        this.elemento =valor
    },
}

Personaje.sethabilidad(-10)
const Danselix95 = new Personaje

console.log (Danselix95)

