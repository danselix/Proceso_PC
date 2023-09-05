/* JS es un lenguaje interpretado, no compilado. IMPORTANTE */

// Variables: son contenedores de informacion donde se pueden almacenar diferentes tipos de datos
//          Estos datos pueden ser numeros (enteros y decimales) booleanos y strings. entre otros

// hay 3 maneras basicas de asignar valores a las variables: var, let y const.
//          var y let permiten guardar las variables sin definirlas. ejem: var cursoJavaScript; let cursoJavascript
//          sin embargo const no permite estar indefinida. hay que asignarle un valor siempre.
// ** importante entender el scope de cada tipo de variable.
// Se recomienda siempre usar const debido a que esta no tiene la capacidad de reasignarsele un valor. a diferencia de var y let.
// No se suele usar var mas puesto que es la unica declaracion de variable que permite la reasignacion. lo cual podria llevar a cometer errores graves dentro del codigo

/* declarar variables al mismo tiempo: */
var x, y, z; /* es siempre recomendable cerrar con ";" */ // y en este caso estamos declarando las variables pero sin asingarles valor

x = 5;
y = 7;
z = x + y; // dentro de las variables tambien se pueden asignar operaciones y procesos

let a, b, c;
a = 5;
b = 7;
c = a + b; //esta es otra forma de asignarles valor a las variables en la misma linea de codigo

// x = y; podria traer errores de memoria puesto que y estaria apuntando al mismo espacio de memoria. y si cambiamos la variable x, estariamos asignandole ese mismo valor a y sin darnos cuenta.
/* siempre tratar de evitar esta clase de errores. hay diferentes formas de tomar el valor de una variable y asignarselo a otra. */

//**\\ TIPOS DE DATOS //**\\

const datos = {
  //VALOR NUMERO\\
  variableNumero: 117, //ENTERO\\
  variableDecimal: 1.17, //FLOAT||FLOTANTE\\
  //VALOR BOOLEAN\\
  variableBoolean: true,
  //VALOR STRING\\
  variableString: "string", // importante colocar corchetes. string hace referencia a cadena de caracteres
  //  VALORES NULL Y UNDEFINED \\
  valoresNullyUndefined: {
    f: "0", // no se encuentra definido
    g: null, // se define como null (vacio)
  }, // este es un objeto anidado. todos los objetos pueden tener varios
}; // esto es un objeto con propiedades de clave y valor

/* console.log(datos.valoresNullyUndefined.f);
console.log(datos.valoresNullyUndefined.g);
console.log("esto es un objeto: "+datos.valoresNullyUndefined) */

//**\\OBJETOS//**\\

let object = {
  clave1: "valor1",
  clave2: "valor2", //siempre separados por ,
  clave3: "valor3",
};

//**\\ARRAYS//**\\
let array = [1, 2, 3, 4, 5, 6]; // lista de numeros
let array2 = ["html", "css", "js"]; // lista de palabras
let array3 = [1, "html", 2, "css", 3, "javascript"]; //lista de objetos

//**\\DATE//**\\
/* const date = new date('11-08-2023') 
console.log(date)  */

// OPERADORES

const variableAsignacion = "valor de la variable"; // el = seria el operador de asignacion
const suma = "el resultado de la suma es: " + (1 + 3); // + es el operador aritmetico de suma
const resta = "el resultado de la resta es: " + (1 - 3); // - es el operador aritmetico de resta
const multiplicacion = "el resultado de la multiplicacion es: " + 1 * 3; // * es el operador aritmetico de multiplicacion
const division = "el resultado de la division es: " + 1 / 3; // / es el operador aritmetico de division
const resto = "el resultado del producto es: " + (1 % 3); // % es el operador aritmetico de resto (el resto es el residuo de la division)
const exponente = "el resultado del exponente es: " + 1 ** 3; // ** es el operador de exponenciacion

/* x++; */ // en este caso x aumentará su valor en 1
/* a--; */ // en este caso a disminuira su valor en 1

/* console.log("quedamos en el minuto 44:28"); */

// sintaxis de variables

/* formas de iniciar una variable */

const $variable = "Nombre";
const variable = "Nombre";
const Variable = "Nombre";
const _Variable = "Nombre";

/* const -variable = 'Nombre' //*((Provoca un error))*\\
          no se pueden usar operadores aritmeticos dentro del nombre de las variables */

//...          SCOPE           ...\\

/* console.log('""//..SCOPE..\\""'); */
{
  let scope1 = "scope1";
  {
    let scope2 = "scope2";
    /* console.log(scope2) */
  }
  /* console.log(scope1) */
}

{
  let x = "x";
  {
    /* console.log(x) */
    /* imprime la variable x que ya esta iniciada dentro de su scope */
  } /*
  /* console.log(x) */ // este imprime igualmente la variable (x) de su scope */
}

    //**\\USO DEL PARSEINT//**\\
/* parseInt()  se utiliza para transformar un string en numero */
/* parseFloat() se usa para sumar y transfomar los strings a numeros flotantes */
{
    let a = 5.1;
    let b = '10.9';
    let c = a + parseInt(b); // en este caso parseInt() esta permitiendo que la variable b sea transformada de string a numero /* esta variable redondea todo numero float hacia abajo */

    /* console.log(c); */

    let d = 5;
    let e = "5.6";
    let f = parseInt(d) + parseFloat(e); // tambien parseFloat() transforma de string a numero para poder procesarlos aritmeticamente

    /* console.log(f) */
}
    //**\\OPERADORES LOGICOS//**\\

    // CONJUNCION && /* todas las condiciones deben ser verdaderas para que el resultado sea true, de lo contrario será false */
    // DISYUNCION || /* solo 1 condicion debe ser verdadera para que el resultado sea true, de lo contrario será false */
    // NEGACION    !  /* siempre el resultado sera la negacion de lo que estemos afirmando */
{
    let x = 5;
    let y = 5;

    let z = x === y; // === preguntan si es el mismo tipo de dato, y el mismo dato
    /* console.log(z) */ // true

    {
        x = '5';
        let z = x == y; // == solo compara si es el mismo dato
        /* console.log(z) */ //truw
    }
    {
        x = 5;
        let z = x != y; // pregunta si son diferentes
        /* console.log(z) */ // false /* porque ambas variables son iguales */
    }
    {
        a = 5;
        b = 9;
        c = 4;  
                /* operador logico Y */
        let z = a < b && a > c; // pregunta si son diferentes
        /* console.log(z) */ // true
                /* operador logico or */
        z = a < b || a > c;
    }
}
//**\\quedamos en la hora 1:11:50//**\\



      //**\\USANDO NODE JS//**\\

{
  let x = 'Este es un console log de x'
  /* console.log(x) */
  // CONTINUA EN SCRIPTCLASES2

}


