document.addEventListener("DOMContentLoaded", function() {
    let suma = document.getElementById("sumar");
    let resultado = document.getElementById("resultado");

    suma.addEventListener("click", sumar);

    function sumar() {
        let res = parseInt(resultado.innerHTML) || 0;

        if (res >= 0) {
            res += 1;
        }

        resultado.innerHTML = `${res}`;
    }
});