/* document.getElementById('demostracion').innerHTML = 'Este texto ah sido insertado mediante js' */


let hora = 1700;


let recordatorio = 'recordatorio: '
let evento = ['Tomarse las pastillas', 'Leer un libro', 'Tomar agua', 'Salir a caminar']
let alarma = ''
let notificacion = function(){
    if (hora < 1500){
        alarma = recordatorio + evento[1];
        console.log(alarma)
    } else {
        alarma = recordatorio + evento[2]
        console.log(alarma)
    }
    
}

notificacion();
