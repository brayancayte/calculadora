// crear un juego que nos indique colocar un numero para saber si acertamos

// para generar numeros al azar: Mat.randow() 0 a 0.9
// para redondear el numero Math.ceil()

let numero = Math.ceil(Math.random()*10);

//generamos un evento
document.getElementById("boton").addEventListener("click",function(){
    //obtener el valor de ese dato
    let entrada = document.getElementById("dato").value;
    //comprobamos si el numero a hacertado
    if(numero==entrada){
        alert("acertaste pillin.Chapa tu luka")
        location.reload();
    }

    else{
        alert("no acertaste\n el numero era el: " + numero + "\n ulsa aceptar para volver a jugar");
        location.reload();
    }
})