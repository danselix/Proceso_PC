                //**\\STRINGS//**\\

let string = 'Einstein dijo \'hola mundo\'' // \ se usa para escapar ciertas cuestiones de codigo

let string2 = 'Este texto esta arriba \n y Este abajo \n y este aun mas abajo' // \n se usa para hacer un salto de linea directamente en javascript

let animal = 'Murcielago'
/* console.log(animal.length) */ // .length se usa para saber cuantos caracteres tiene un string

/* averiguar todos los metodos de strings */

const resultado = animal.slice(0,5) + 'a' // se usa para copiar los caracteres de un string. Debemos indicarle de donde a donde. Tambien se puede usar "substring"
/* console.log(resultado);
console.log(animal) */

const texto = 'La educacion es muy importante en Colombia'
const resultado1 = texto.replace('Colombia', 'el mundo') // replace reemplaza los caracteres especificados
const resultado2 = texto.toUpperCase() // en este caso este metodo convierte todos los caracteres en mayuscula
const resultado3 = texto.concat(' y para ' + animal, string) // concat se usa para concatenar strings
                //**\\quedamos en la hora 2:17:30 //**\\
const nuevoTexto = '          Este texto tiene muchos espacios al inicio y al final               '
const nuevoResultado = nuevoTexto.trim() // este metodo nos permite eliminar el exceso de espacios al principio y al final de un string. Actua quitando esos espacios
const metodo_charAt = nuevoTexto.trim().charAt(5) // charAt() se usa para indicar el caracter que se encuentra en la posicion que le indiquemos
const metodo_charAt1 = nuevoTexto.trim()[5] // estamos expresando el mismo dato pero usando codigo de manera diferente. en este caso .charAt funcina como el [5]
{           /* EJEMPLO */
    const pijama = 'f     pijamaaaaa   y aja     '
    const quitarEspacios = pijama.trim() // esto solo funciona si antes del exceso de espacios no hay ningun caracter o letra mas que espacio
    /* console.log(quitarEspacios) */
    /* .trim tambien tiene .trimStart() y .trimEnd por si los espacios solo estan al principio o al final */
    { // se pueden concatenar metodos y usarlos dentro de la misma variable:
        const texto = '    texto con muchos espacios'
        const texto1 = 'y texto concatenado           \n lol'
        const transmutarTexto = texto.trim().toLocaleUpperCase().concat(' '+ texto1.trim().toLocaleUpperCase()) 
        /* console.log(transmutarTexto) */
    }
}

/*  */                                              /*  */
        // averiguar para que sirve padStart(4, '-')
/*  */                                              /*  */

const metodoSplit = "este texto debe ser dividido. para dividirlo hay que indicarle en donde hacer el corte. por ende lo podemos indicar por el punto, y este texto esta despues de una coma"
const split = metodoSplit.split('. ') // le indicamos con "." que debe hacer el corte cuando encuentre ese punto. El espacio en '. ' es para eliminar el espacio  antes de cada oracion
/* console.log(split) */
{               /* EJEMpLO */
    const texto = "separame"
    const split = texto.split('') // dentro del parentesis de split deben estar las comillas para que separe todos los caracteres del string. de lo contrario no separará el string
    /* console.log(split) */
} 
    //**\\FIN DE EL MODULO DE ARRAYS//**\\
    /* hora 2:23:34 */




