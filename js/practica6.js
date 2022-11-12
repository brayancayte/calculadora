/* 
6 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/


let palabra = prompt("escribe una palabra");
// desde que numero iniciara el conteo, para eso pongo el 0
let consonantes = 0;
let vocales = 0;

for(let letra of palabra){
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") vocales++
    else consonantes++
}

document.write(`la palabra que escribiste tiene ${vocales} vocales, tiene ${consonantes} consonantes y tiene en total ${palabra.length} letras.`)