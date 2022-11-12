document.getElementById("boton").addEventListener("click",function(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    
    document.getElementById("salida").innerHTML = "encantado de conocerte " + nombre + " que bueno que tengas " + edad + "años";
})