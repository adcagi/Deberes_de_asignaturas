

    function muestra() {
            let element = document.getElementById("adicional");
            let link = document.getElementById("enlace");
            if(element && link){
                if(element.className == "oculto"){
                    element.className = 'visible';
                    link.className =  'oculto';
                }
            }
    }


