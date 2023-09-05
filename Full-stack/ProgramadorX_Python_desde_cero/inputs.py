nombre = ""
edad = ""
color_Favorito = ""
# solicitud de datos:
solicitar_nombre = input("ingrese su nombre: ")
nombre = solicitar_nombre
print("Hola y Bienvenido " + nombre) #saluda al usuario

solicitar_edad = input("ingresa tu edad: ")
edad = solicitar_edad
solicitar_color_favorito = input("ingresa tu color favorito: ")
color_Favorito = solicitar_color_favorito

# se confirman todos los datos del usuario:
print("por favor confirma tus datos: y/n")
print(nombre, edad, color_Favorito)
confirmacion = input()
respuesta = confirmacion
if (respuesta == "y") {
    print("Gracias por su confirmacion")
} else if {
    print("¿que dato desea corregir?")
} else {
    print("Dato invalido, intente de nuevo")
}