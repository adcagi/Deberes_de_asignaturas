
let textoanterior = document.querySelector("#a")
textoanterior2 = textoanterior.innerText
function ocultarTexto(){
    let element = document.querySelector("#p")
    let element2 = document.querySelector("#a")
    if (element.style.visibility == "visible" || element.style.visibility == ""){
        element.style.visibility = "hidden";
        element2.innerHTML = "Pinchaste aquí";
    }else{
        element.style.visibility = "visible";
        element2.innerHTML = textoanterior2
    }

    
}



let ocultar = document.getElementById("enlace_1");

ocultar.addEventListener("click", ocultarTexto);
let element2 = document.getElementById("enlace_1")

console.log(element2.innerText)