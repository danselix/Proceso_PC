const x = 5.5;
const y = 60;

//**\\FUNCIONES//**\\

// Es un bloque de codigo reutilizable que sirve para cumplir una funcion especifica. Se puede pensar como un grupo de funciones especificas que se agrupan bajo un nombre especial.

function nombreDeLaFuncion(/* parametros */) {
  //codigo de la funcion
}
//      nombre--parametros
function suma(a, b) {
  return a + b; // lo que devuelve
  /* console.log('El resultado de la suma es: ', a + b) */
}
let resultado = suma(x, y); // se le asigna el valor retornado a la variable resultado
/* console.log('el resultado de suma es: ' ,resultado); */
// miramos el resultado. a console.log se le puede pedir que imprima por consola diferentes cosas al mismo tiempo, siempre y cuando esté separado por una coma

            /* EJEMPLO */
// una funcion de convierte de grados celsius a fahrenheit
const temperaturaEnF = 65;
function transformarCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
const tempFahrenheit =
  "La temperatura en fahrenheit es de: " +
  parseInt(transformarCelsius(temperaturaEnF));
/* console.log(tempFahrenheit) */

            /* EJEMPLO */
const persona = {
  nombre: "Danselix95",
  edad: "28",
  pasaporte: true,
};
{
  function mayorDeEdad(edad) {
    if (edad < 17) {
      console.log("Es menor de 18. No puede ingresar");
    } else {
      console.log("Es mayor de edad. Siga " + persona.nombre + " ,bien pueda");
    }
  }
  function tienePasaporte(pasaporte){
    if (pasaporte = true){
        console.log('Pasaporte al día. Siga ' + persona.nombre)
    } else {
        console.log("no tiene pasaporte.")
    }
  }
  /* mayorDeEdad(persona.edad);
  tienePasaporte(persona.pasaporte) */
};

//**\\FUNCION FLECHA//**\\
{
    /* en este tipo de funcion de declara de una vez la funcion. no siempre es recomendable usarla */
    const sumarDecena = (numero) => {
        return parseInt(numero) + 12;
    }
    const sumarDiez = numero =>{return parseInt(numero) + 10;}
    /* console.log(sumarDiez(persona.edad)) */
    const respuesta = () => console.log('Soy una funcion de flecha'); // este tipo de funciones flecha son muy usadas
    /* respuesta(); */
}
            //**\\OBJETOS//**\\
// Es la representacion virtual de un objeto real que se compone de pares de claves y valores de esta forma: clave: valor,

// ya eh declarado uno arriba llamado persona

const auto1 = {
    marca: "Mazda",
    modelo: "CX-5",
    peso: "1.615 KG",
    color: "gris mate"
}
const auto2 = {
    marca: "Ford",
    modelo: "Raptor",
    peso: "2.506 KG",
    color: "negro"
} // objeto (auto) clave (marca) valor (ford)
// se pueden cambiar las propiedades accediendo a ellas e igualandolas con el valor deseado. ejemplo:
auto1.marca = "Mazda"
auto1.modelo = "Miata"
auto1.peso = "1.000 kg"
auto1.color = "Blanco"
/* console.log("las propiedades alteradas son: "+ auto1.marca,auto1.modelo,auto1.color,auto1.peso) */

    //**\\EJEMPLO//**\\
{
    const vendedor = {
        nombre: 'Pedro',
        apellido: 'Gonzales',
        empresa: "Auto S.A.",
        habilidadesBlandas: ['carisma', 'Puntualidad'],
        vender: function(){
            console.log('Pedro vendió un Auto');
        },
        nombreCompleto: function(){
            return "Mi nombre es: " + this.nombre +" " + this.apellido;
        }
    }
    /* console.log(vendedor.nombreCompleto())
    console.log(vendedor.vender()); 
    console.log(vendedor.habilidadesBlandas[1]) */
}

//**\\ quedamos en la hora 1:54:23 //**\\