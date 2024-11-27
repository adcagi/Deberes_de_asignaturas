
function ocultarTexto(){
    let element = document.getElementById("contenidos_1")
    element.style = "display:none;"
    if (element.style == "display:none;"){
        element.style = "display:block;"
    }
}



let ocultar = document.getElementById("enlace_1") 

ocultar.addEventListener("click", ocultarTexto)
