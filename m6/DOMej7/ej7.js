function limita(maximoCaracteres) { 
    var elemento = document.getElementById("texto"); 
    if(elemento.value.length >= maximoCaracteres ) { 
        return false; 
    } else { 
        return true; 
    } 
}


limita(10)