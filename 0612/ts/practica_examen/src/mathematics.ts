export default function minValue(array: number[]){
    let x;
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1; j++){
            if(array[j] > array[j + 1]){
                x = array[j + 1];
                array[j + 1] = array[j];
                array[j] = x;
            }
        }
    }
    return array[0];
}


export  function maxValue(array: number[]){
    let x;
    for(let i = 0; i < array.length -1; i++){
        for(let j = 0; j < array.length -1; j++){
            if(array[j] < array[j + 1]){
                x = array[j + 1];
                array[j + 1] = array[j];
                array[j] = x;
            }
        }
    }
    return array[0];
}


export function decompose(value: number){
    let arr: number[]= [];
    for(let i = 2; i < value - 2; i++){
        while(value % i === 0){
            value  /= i;
            arr.push(i);
        }
    }
    return arr;
}