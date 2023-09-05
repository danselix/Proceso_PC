# COMPOUN DATA TYPES
# se llaman datos compuestos porque permiten guardar diferentes tipos de datos en la misma variable

lista = ["Danselix95","Hola mundo", 1.70, True]
print(lista[1]) #en este caso nos muestra el segundo dato de la lista porque se cuenta del 0 al 9. En este caso "hola mundo" es el dato #1 y Danselix95 seria el dato #0
print(lista[0])

# Existen diferentes tipos de Matrices, en este caso acabamos de ver la Matriz lista. Pero tambien existen las Matrices array.

tupla =("Danselix95","Hola mundo", 1.70, True)
print(lista[2]) 
print(lista[3])

# La diferencia entre lista y tupla es que los elementos dentro de lista pueden ser modificados, en cambio dentro de tupla NO.
#esto es valido
lista[3] = False
#  esto no es valido
#  tupla[3] = False
print(lista[3])

#CONJUNTOs SET
conjunto = (27, "mi edad es", "Danselix95")

print(conjunto[1], conjunto[0], "y mi nombre es:", conjunto[2])
#Print: mi edad es 27 y mi nombre es: Danselix95
 # "Conjunto" tambien se comporta como tupla y por ende no deja cambiar ni reasignar los valores de su lista.

conjunto = {"lucas dalto","soy dalto",True,1.85,369}
print(conjunto)
#la diferencia entre conjunto y lista es que la lista tiene un indice y una organizacion establecida... en cambio conjunto no. Por eso si tratamos de imprimir algun item de conjunto, nos va a dar un error.
#los datos en "conjunto" no se muestran repetidos.
conjunto = {"lucas dalto","soy dalto",True,1.85,369,"lucas dalto"}
print(conjunto)


#CREANDO UN DICCIONARIO (dict)
diccionario = {
    'nombre' : 'Danselix95',
    'saludo' : 'Hola Mundo',
    'altura' : 1.70,
    'emocionado' : True,
}
print (diccionario['nombre'])

#LISTA
#TUPLA
#DICCIONARIO