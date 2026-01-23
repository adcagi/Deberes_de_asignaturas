document.addEventListener("DOMContentLoaded", () => {
    let element =  document.getElementById("texto") as HTMLTextAreaElement;
    let nChars = document.getElementById("nchars");
    function limita(maximoCaracteres : number){
        element.addEventListener("input", () =>{
            if(element.value.length > maximoCaracteres ){
                element.value = element.value.slice(0, maximoCaracteres)
            }
            
            const charRestantes = maximoCaracteres - element.value.length;
            console.log(element.value.length)
            if(nChars){
                nChars.innerText = `carcateres restantes ${charRestantes} / ${maximoCaracteres}`
            }
        })
    }

    limita(8);


})