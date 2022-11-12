/* 
5 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let color = ["azul","amarillo","rojo","verde","rosa"]

//lowercase el texto estara leido en minuscula
let cliente = prompt("estimado cliente\n escriba aqui su color que desea comprar: ").toLocaleLowerCase();

//comprobamos si existe
if(color.indexOf(cliente) !== -1){
    document.write("tu color se encuentra disponible, puedes hacer el pedido")
}

else{
    document.write("lastimosamente no tenemos ese color, te interesaria otro color?")
}

