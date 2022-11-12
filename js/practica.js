//RECOMENDACIONES MEDICAS (HTML)

//pedir el nombre,apellido,dni y peso de la persona
//mostrar en la pantalla sus datos y mostrar que subira 5 kilos si consume en este mes comida chatarra.


/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

// var nombres = prompt("ingresa tu nombre: ")
// var dni = prompt("ingresa tu dni: ")
// var peso = prompt("cual es tu peso actual: ")

// document.write(`NOMBRE:${nombres}, DNI ${dni}, PESO ${peso},kg subiras 5 kilos si sigues comiendo comida chatarra este mes`)

let figura = prompt("¿que area de figura deseas calcular?: \n1)rectangulo \n2)circulo \n3)triangulo")

//poner variables

let base;
let altura;
let radio;

//control de evaluacion
switch(figura){
    case "1":
        base = prompt("cuanto tienes de base")
        altura = prompt8("cuanto tienes de altura")
        document.write(`Tu area del rectangulo es ${base*altura} cm`)
        break

    case "2":
        radio = prompt("¿cuanto tiene de radio?")
        document.write(`el area de tu circulo es ${Math.PI*Math.pow(radio,2)} cm`)
        break

    case "3":
        base = prompt("cuanto tienes de base")
        altura = prompt("cuanto tienes de altura")
        document.write(`el area del triangulo es ${base*altura/2} cm`)
        break

    default:
        document.write("esta opcion no es valida")
        break
}













