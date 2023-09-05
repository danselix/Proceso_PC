const guitarra = {
    cuerda1: 'E',
    cuerda2: 'B',
    cuerda3: 'G',
    cuerda4: 'D',
    cuerda5: 'A',
    cuerda6: 'E',
}
const bajo = {
    cuerda1: 'G',
    cuerda2: 'D',
    cuerda3: 'A',
    cuerda4: 'E',
}
const ukulele = {
    cuerda1: 'A',
    cuerda2: 'E',
    cuerda3: 'C',
    cuerda4: 'G',
}
//      Object.keys(objeto) 
// Devuelve un arreglo con las propiedades enumerables de un objeto.
const contarPropiedades = Object.keys(guitarra)
// console.log(contarPropiedades)

//      Object.values(objeto) 
// Devuelve un arreglo con los valores de las propiedades enumerables de un objeto. 
const contarValores = Object.values(guitarra)
// console.log(contarValores)

//      Object.entries(objeto)
// Devuelve un arreglo de arreglos que contienen pares clave-valor de las propiedades enumerables de un objeto.
const invertirObjeto = Object.entries(bajo)
// console.log(invertirObjeto)

//      Object.assign(objetoDestino, objetoFuente)
// Copia las propiedades enumerables de uno o más objetos fuente al objeto destino.
var objetosCombinados = {}
const combinarObjetos = Object.assign(objetosCombinados, guitarra, bajo, ukulele)
// console.log(objetosCombinados)
