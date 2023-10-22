// Esto agrega a la pantalla el numero del boton que sea presionado
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
// Esto borra los numeros y resultados de la pantalla
 function borrar(){
    document.getElementById('pantalla').value = ''
}
// funcion de calcuular
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
