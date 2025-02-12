let suma = document.getElementById("sumar")
let resultado = document.getElementById("resultado")
function sumar(){
    let sum = Suma
    let res = resultado

    if(res >= 0 || res == ""){
        res +=1
    }

    resultado.innerHTML = res
}

sumar()