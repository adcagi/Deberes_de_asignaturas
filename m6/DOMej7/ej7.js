function limita(maximoCaracteres) { 
    let elemento = document.getElementById("texto"); 
    if(elemento.value.length >= maximoCaracteres ) { 
        return false; 
    } else { 
        return true; 
    } 
}

// Agregar el event listener para el evento 'input'
document.getElementById("texto").addEventListener("input", function() {
    let contador = document.getElementById("contador");
    contador.textContent = "Caracteres: " + this.value.length;
});