// Dado un input y un boton, escribir nombres de personas (no controlamos nada de momento) y lo mostramos en una lista desordenada.

// la funcion creara la accion del boton
function insertarNombre(evt){
    evt.preventDefault();

// variable para tomar el dato escrito
    let nombre = document.getElementById("nombre").value

// si esta vacio
    if(nombre == ""){
        alert("el espacio no puede estar vacio")
    }

    else{
        // creamos 2 variables
        // la 1 sera para almacenar las palabras
        // la 2 sera para mostrar en la pantalla
        let opcion = "<li>" + nombre + "</li>";
        let lista = document.getElementById("lista-nombres");
// aparecen los nombres agregados al oprimir el boton
        lista.innerHTML += opcion;

        // para confirmar aparecera una alerta
        alert("se ha agregado el nombre")
    }
}


