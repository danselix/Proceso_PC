// ARRAYS

                 // 0             1            2 
const array = ["curso html", "curso css", "curso JS"]

// tambien se puede escribir asi:
const ejemplo = [
    "curso html", 
    "curso css", 
    "curso JS"
]


// Esta es una manera de inicializar un array vacio con los espacios definidos
const array1 = new Array (5)

array1[0] = "curso de HTML"
array1[1] = "Curso de CSS"
array1[2] = "Curso de JS" 
 
/* 
    Se puede colocar un array dentro de otro array:

    array1[3] = [1,2,3,4,5]
    
    La diferencia entre array y objeto es la forma de la declaracion. el array se declara usando "[]" mientras que el objeto se declara usando "{}"

      var array = [0,1,2,3]:
      var objeto = {clave:"valor"};
      
*/

document.getElementById('seleccionable1').innerHTML = array[0]
document.getElementById('seleccionable2').innerHTML = array[1]
document.getElementById('seleccionable3').innerHTML = array[2]

console.log(array1);

