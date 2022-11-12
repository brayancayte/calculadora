//sirve para que salga un mensaje en un cuadro
//alert("Buenos dias")

//aparesca un mensaje en la pantalla
//document.write("a la clase de java")

//aparesca como una prueba
//console.log("a la clase de java")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/

var nombre = prompt("escribe tu nombre: ")
var edad = parseInt(prompt("escribe tu edad: "))

//imprimir el resultado
//console.log(`hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad} años`)

document.write(`hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad+1} años`)

//convertir la cantidad en numeros
//parseInt()





