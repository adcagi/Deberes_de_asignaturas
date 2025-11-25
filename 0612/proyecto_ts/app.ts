let value : string = "test"



function print (...params: string[]) : void{
   console.log(...params)
}

print(value);

let element = document.getElementById('main')
if(element != null){
    element.innerText = `hey como tamos`;
};


function sum(...params : number[]){
    let total = 0;
    for (let value of params){
        total += value;
    }
    return total;
}

console.log(sum(2, 3));

