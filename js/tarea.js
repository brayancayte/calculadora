let figura = prompt("Ingresa la figura a la cual deseas calcular su area: \ntriangulo \nparalelogramo \nrectangulo \ncuadrado \nrombo \ncometa \ntrapecio \ncirculo")

let base;
let altura;
let radio;
let lado;
let diagonalM;
let diagonalm;
let baseInferior;
let baseSuperior;

switch(figura){

    case "triangulo":
        base = prompt("¿De cuanto es la base?")
        altura = prompt("¿De cuanto es la altura")
        document.write(`Tu area del triangulo es de: ${base*altura/2} cm2`)
        break

    case "paralelogramo":
        base = prompt("¿De cuanto es la base?")
        altura = prompt("¿De cuanto es la altura")
        document.write(`Tu area del paralelogramo es de: ${base*altura} cm2`)
        break

    case "rectangulo":
        base = prompt("¿De cuanto es la base?")
        altura = prompt("¿De cuanto es la altura")
        document.write(`Tu area del rectangulo es de: ${base*altura} cm2`)
        break

    case "cuadrado":
        lado = prompt("¿Cual es la medida de un lado?")
       document.write(`Tu area del cuadrado es de: ${lado*lado} cm2`)
        break
    
    case "rombo":
        diagonalM = prompt("¿Cual es tu diagonal mayor?")
        diagonalm = prompt("¿Cual es tu diagonal menor?")
        document.write(`Tu area del rombo es de: ${diagonalM*diagonalm/2} cm2`)
        break

    case "cometa":
        diagonalM = prompt("¿Cual es tu diagonal mayor?")
        diagonalm = prompt("¿Cual es tu diagonal menor?")
        document.write(`Tu area de tu cometa es de: ${diagonalM*diagonalm/2} cm2`)
        break

    case "trapecio":
        baseSuperior = prompt("Ingresa la medida de la base superior: ")
        baseInferior = prompt("Ingresa la medida de la base inferior: ")
        altura = prompt("Ingresa la medida de la altura: ")
        document.write(`Tu area del trapecio es de: ${((parseInt(baseSuperior) + parseInt(baseInferior)) / 2) * parseInt(altura)}`)
    break

    case "circulo":
        radio = prompt("¿cuanto tiene de radio?")
        document.write(`el area de tu circulo es: ${Math.PI*Math.pow(radio,2)} cm2`)
        break
}