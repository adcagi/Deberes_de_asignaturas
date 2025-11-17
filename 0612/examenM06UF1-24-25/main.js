//Ex1:



function cercarEx1(){
        find10PerCentHiger(vector)
   }
   const vector = [42, 18, 96, 73, 54, 22, 87, 33, 66, 5, 90, 41, 78,
    12, 67, 92, 15, 48, 31, 61, 39, 74, 100, 53, 25]

function find10PerCentHiger(array){
        max = 0;
        let element = document.getElementById("resultatEx1")
        jarray = []
        for(i = 0; i < vector.length; i++){
            if(vector[i] > vector[i - 1]){
                max = vector[i]
            }
        }
        for(j = 0; j < vector.length; j++){
            if(vector[j] >= (max * 0.9) && vector[j] <= max){
                jarray.push(vector[j])
                element.innerHTML = jarray
            }
        }
}


//Ex2


function bolacpu(){

    aleatoria = document.getElementById("colorCPU")

    arrayaleatoria = ["blue", "red", "orange", "pink", "purple"]
    for (i = 0; i < arrayaleatoria.length; i++){
        element = Math.floor(Math.random()*i)

    }
    aleatoria.style.backgroundColor = arrayaleatoria[element]

}
function jugador(){

    bolajugador = document.getElementById("colorUser")

    for (j = 0; j < arrayaleatoria.length; j++){

        element = Math.floor(Math.random()*i)
    }
    bolajugador.style.backgroundColor = arrayaleatoria[element]
}






function jugarEx2(){

    bolacpu()
    jugador()
    setInterval(jugador, 300)
}

function escollirColorEx2(){
    bolas = document.getElementById("resultatColors")
   if( bolajugador.style.backgroundColor == aleatoria.style.backgroundColor){
    alert("has ganado")
    }else{
    alert("has perdido")
    }
}