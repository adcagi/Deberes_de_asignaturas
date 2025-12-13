export default function minValue( args : number[]){
    let min = args[0];
    for(let num of args){
        if(num < min){
            min = num;
        }
    }
    return min;
}

function maxValueAndMinValue(args : number[]){
        let max = args.length;
        let min = args[0];
    for(let num of args){
        if(num > max){
            max = num;
        }
    }
    for(let num of args){
        if(num < min){
            min = num;
        }
    }
    return min + "," + max;
    
}
export {maxValueAndMinValue};

function decompose(n: number): number[]{
    const array : number[] = [];
    for(let i = 2; i <= n; i++){
        while(n % i === 0){
            array.push(i);
            n = n/i;
        }
    }
    return  array;
}
 export{decompose};