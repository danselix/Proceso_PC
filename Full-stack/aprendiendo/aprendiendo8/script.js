const persona = {
    nombre: "Danselix95",
    edad: 28,
    estatus: "Musico violoncellista programador",
    saludo: () =>
        console.log('Hola Mundo'),
    actualizarEdad(edad){
        this.edad = edad
    },
}

function mostrarPersona(){
    document.getElementById("texto1").innerHTML = "2ndo texto";
}