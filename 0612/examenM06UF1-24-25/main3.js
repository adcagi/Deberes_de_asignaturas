//EX1:

let max = 0;
const vector = [42, 18, 96, 73, 54, 22, 87, 33, 66, 5, 90, 41, 78,  
                12, 67, 92, 15, 48, 31, 61, 39, 74, 100, 53, 25];
let nuevoArray = [];
let resto = 0;
element = document.getElementById('resultatEx1');
function findMax(array){
    for(let i = 0; i < array.length; i++){
        if (array[i]>max){
            max = array[i];
    
        }
    
    }
}



function find10PerCentHigher(array){
    resto = max - (max * 0.1);

    for (let j = 0; j < array.length; j++){

        if(array[j] >= resto){
            nuevoArray.push(array[j])
        }
    }

}




function cercarEx1(){
    findMax(vector);
    find10PerCentHigher(vector);
    element.innerHTML = nuevoArray;
}


//EX2:
let arrayColors =["pink","purple","yellow","aquamarine"];

let bolaCPU = document.getElementById('colorCPU');
let bolaUser = document.getElementById('colorUser');
let interval = 0;
function jugarEx2(){
    let randColor = Math.floor(Math.random ()* arrayColors.length);
    bolaCPU.style.backgroundColor = arrayColors[randColor];


    interval = setInterval(() =>{
            let randColorUser = Math.floor(Math.random ()* arrayColors.length);
            bolaUser.style.backgroundColor = arrayColors[randColorUser];      
    }, 300)
}


function escollirColorEx2(){

    clearInterval(interval);

    if(bolaUser.style.backgroundColor === bolaCPU.style.backgroundColor){
    alert("has gando!")
    }else{
        alert("Has perdido...")
    }
}



//EX3:

const matriz = [
['A', 'X', 'G', 'T', 'M'],
['P', 'L', 'K', 'E', 'W'],
['R', 'C', 'M', 'H', 'Q'],
['S', 'Z', 'O', 'D', 'B'],
['Y', 'J', 'U', 'F', 'V']
];
let resultats = document.getElementById('resultatEx3');
let posiciones = [];
function findElement(array, value){

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if(array[i][j] === value ){
                posiciones.push({x: i, y: j});
                resultats.innerHTML = JSON.stringify(posiciones);
            }
    
        }
    }
}

function cercarEx3(){
    findElement(matriz, 'M');
}
