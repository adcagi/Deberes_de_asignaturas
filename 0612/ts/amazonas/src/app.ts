document.addEventListener('DOMContentLoaded', () =>{

    
    const boardElement = document.getElementById("board") as HTMLElement
const turnElement = document.getElementById("turn") as HTMLElement

const SIZE = 10

type Cell = {
row:number
col:number
piece:string|null
}

let board:Cell[][] = []

let selected:Cell | null = null
let phase:"move"|"arrow" = "move"
let turn:"white"|"black" = "white"

function createBoard(){

for(let r=0;r<SIZE;r++){

board[r]=[]

for(let c=0;c<SIZE;c++){

const cell:Cell = {
row:r,
col:c,
piece:null
}

board[r][c]=cell

}

}

placeAmazons()

render()

}

function placeAmazons(){

board[0][3].piece="white"
board[0][6].piece="white"
board[3][0].piece="white"
board[3][9].piece="white"

board[6][0].piece="black"
board[6][9].piece="black"
board[9][3].piece="black"
board[9][6].piece="black"

}

function render(){

boardElement.innerHTML=""

for(let r=0;r<SIZE;r++){

    for(let c=0;c<SIZE;c++){

const cell=board[r][c]

const div=document.createElement("div")
div.classList.add("cell")

if((r+c)%2==0) div.classList.add("dark")

div.dataset.row=r.toString()
div.dataset.col=c.toString()

if(cell.piece==="white"){
div.innerHTML="♕"
}

if(cell.piece==="black"){
div.innerHTML="♛"
}

if(cell.piece==="arrow"){
div.innerHTML="✹"
}

div.addEventListener("click",handleClick)

boardElement.appendChild(div)

}

}

}

function handleClick(e:MouseEvent){

const target=e.currentTarget as HTMLElement

const r=parseInt(target.dataset.row!)
const c=parseInt(target.dataset.col!)

const cell=board[r][c]

if(phase==="move"){

if(cell.piece===turn){

selected=cell
highlightMoves(cell)

}

else if(selected && !cell.piece){
    
    moveAmazon(selected,cell)

phase="arrow"

clearHighlights()

highlightMoves(cell)

}

}

else if(phase==="arrow"){
    
if(!cell.piece){

cell.piece="arrow"

phase="move"

selected=null

switchTurn()

render()

}

}

}

function moveAmazon(from:Cell,to:Cell){

to.piece=from.piece
from.piece=null

render()

}

function switchTurn(){

turn=turn==="white"?"black":"white"

turnElement.textContent="Turno: "+(turn==="white"?"Blancas":"Negras")

}

function highlightMoves(cell:Cell){

clearHighlights()

const directions=[
    [1,0],[-1,0],[0,1],[0,-1],
    [1,1],[1,-1],[-1,1],[-1,-1]
]

for(const d of directions){

    let r=cell.row+d[0]
let c=cell.col+d[1]

while(r>=0 && r<SIZE && c>=0 && c<SIZE && !board[r][c].piece){

const index=r*SIZE+c

boardElement.children[index].classList.add("valid")

r+=d[0]
c+=d[1]

}

}

}

function clearHighlights(){
    
document.querySelectorAll(".valid").forEach(el=>{
el.classList.remove("valid")
})

}

createBoard()
})