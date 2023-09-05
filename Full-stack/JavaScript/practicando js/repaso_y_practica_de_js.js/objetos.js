// crear objetos para interactuar con ellos y con todos los metodos y funciones posibles

// Object.assign()   Este método se usa para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino
// object.create()   Este método se utiliza para crear un nuevo objeto, utilizando un objeto existente como prototipo. Aquí tienes un ejemplo de cómo se puede utilizar
// Object.defineProperty()   Este método se usa para añadir una nueva propiedad directamente a un objeto, o para modificar una propiedad existente.




const Persona = {
    nombre: '' ,
    edad: 0,
    ID: 0, 

}

const usuarios = [
    Daniel = Object.assign(Persona),
    Otro = Object.assign(Persona),

]

Daniel.nombre = 'Daniel'
Daniel.edad = 28
Daniel.ID = 1234567890
Daniel.personalidad = 'Genio filantropo musico y multibillonario'
// console.log(Daniel)

Otro.nombre = 'el otro'
Otro.edad = 100
Otro.ID = 9876543210
Otro.gustosMusicales = 'clasica, entre otros'
// console.log(Otro)

function mostrarValoresObjetos(usuarios) {
    // Recorre cada objeto en el arreglo
    objetos.forEach(usuarios => {
      // Obtiene los valores de cada propiedad del objeto
      const valores = Object.values(usuarios);
      
      // Muestra los valores por consola
      valores.forEach(valor => {
        // console.log(valor);
      });
    });
  }
  
  // Ejemplo de uso de la función
  const objetos = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Pedro', edad: 30 },
  ];
  
  mostrarValoresObjetos(usuarios);
  