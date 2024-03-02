function saludar(nombre) {
    return `Hola ${nombre}`/* aqui se usan comillas invertidas siempre puesto que colocar la variable dentro del string precisa de usarlas */
}

function saludarHolaMundo(){
    return 'Hola, mundo'
}

/* este es el codigo para exportar modulos */
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo

/* y esta es una forma mas organizada para exportar varios modulos */
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
}