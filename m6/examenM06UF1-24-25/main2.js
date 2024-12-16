//Ex1
function find10PerCentHiger(array){
    let max = array[0];
    let arr = [];
    let element = document.getElementById("resultatEx1");
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }

    for(let j = 0; j < array.length; j++){
        if (array[j] >= (max * 0.9) && array[j] <= max){
            arr.push(array[j]);
        }
    }
    element.innerHTML = arr;
}


    function cercarEx1(){
        find10PerCentHiger([42, 18, 96, 73, 54, 22, 87, 33, 66, 5, 90, 41, 78, 12, 67, 92, 15, 48, 31, 61, 39, 74, 100, 53, 25]);
    }


//Ex2


let intervalId;
let color_CPU;
let color_User;
function colorCPU(){
    let colors = ["purple", "yellow", "aquamarine", "red"];
    let randColor = Math.floor(Math.random()*colors.length);
    let element = document.getElementById("colorCPU");
    element.style.background = colors[randColor];
    color_CPU = randColor;
    return color_CPU;
}

function colorUser(){
    let colors = ["purple", "yellow", "aquamarine", "red"];
    let randColor = Math.floor(Math.random()*colors.length);
    let element = document.getElementById("colorUser");
    element.style.background = colors[randColor];
    color_User = randColor;
    return color_User;
}

function jugarEx2(){
    colorCPU();
    intervalId = setInterval(colorUser, 300);
}


function escollirColorEx2(){
    clearInterval(intervalId);
    if(color_CPU == color_User){
        alert("Has ganado");
    }else{
        alert("Has perdido");
    }
}



//ex3


let x;
let y;
let valor = "E"
const matriz = [
    ['A', 'X', 'G', 'T', 'M'],
    ['P', 'L', 'K', 'E', 'W'],
    ['R', 'C', 'M', 'H', 'Q'],
    ['S', 'Z', 'O', 'D', 'B'],
    ['Y', 'J', 'U', 'F', 'V']
    ];
function findElemet(array, value){
    let arrayVacio = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if(array[i][j] == value ){
                arrayVacio.push({x: i, y: j});
            }
        }
    }
    return arrayVacio;
}

function cercarEx3(){
    let resultados = findElemet(matriz, valor);
    let element = document.getElementById("resultatEx3");
    element.innerHTML = JSON.stringify(resultados);
}


//ex4

class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }

    addChild(value){
        const childNode = new Node(value);
        this.children.push(childNode);
        return childNode;
    }

    getChildren(){
        return this.children;
    }

    find(value) {
        if(this.value === value){
            return this
        }
        for (let child of this.children) {
            const result = child.find(value);
            if (result){
                return result
            }
        }
        return null;
    }
}

let root = new Node("Root");


let child1 = root.addChild("child 1");
let child2 = root.addChild("child2");

let child1_1 = child1.addChild("child 1.1")
let child1_2 = child1.addChild("child 1.2")


console.log(root.getChildren())