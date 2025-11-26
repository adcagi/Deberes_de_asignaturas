

//ej1

let str : string =" hola";
let num : number = 2;

console.log(str + num);


// let bigint: bigint  = 123456789012345678901234567890n;

// try{
//     console.log(bigint + num);
// }catch(e){
//     console.error("No se puede mezclar bigint con number");
// }


let numeros :  number[] = [0, 2, 0, 4, 0];

 
for(let n of numeros){
    let exist : boolean = n > 0;
    if(exist){
        console.log(n);
    }
} 


//ej2

enum mides{
    xs, 
    s,
    m,
    l,
    xl
}

function porcentaje(value:number, talla:mides){
    let increment = 0;
    if(talla === mides.xs){
       increment =  value + (value * 0 / 100);
    } else if (talla === mides.s){
       increment = value + (value * 5 / 100);
    } else if (talla === mides.m){
      increment = value + (value * 10 / 100);
    } else if (talla === mides.l){
       increment = value + (value * 15 / 100);
    } else if (talla === mides.xl){
       increment = value + (value * 20 / 100);
    }
    return increment;
    }

console.log(porcentaje(10, mides.xl));

enum  dies{
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}

function numeroDia(dia:dies){
    return dia + 1;
}

console.log(numeroDia(dies.miercoles));


enum colors{
    red =  '#EB1416',
    orange = '#FFA500',
    yellow ='#fffb00ff',
    green ='#79C314',
    blue = '#487DE7',
    indigo = '#4B369D',
    violet = '#70369D'

}

function attachColor(...color:colors[]){
    for( let element of color){
    let div = document.createElement('div');
    div.style.width = '700px';
    div.style.height = '100px';
    div.style.backgroundColor = element;
    document.body.appendChild(div);
    }
}


attachColor(colors.red, 
    colors.orange, 
    colors.yellow, 
    colors.green, 
    colors.blue, 
    colors.indigo, 
    colors.violet);


    //ej3

        function retType<T>(param: T){
            return typeof(param);   
        }

        console.log(retType(5));

        function retArray<T>(value : T, param : T[]){

            for (let v of param){
                if (v === value){
                    return true;
                }
            }
            return false;

        }

       console.log(retArray(3, [2,4,5,3,8])) ;

       //TODO

       function orderArray<T>(array : T[], compare: (a:T, b:T) => number): T[]{
            let aux: T | undefined ;
            for(let i = 0; i < array.length; i++){
                for(let j = 0; j < array.length - 1; j++){
                    if(compare(array[j]!, array[j+1]!) > 0){
                        aux = array[j];
                        (array as any[])[j] = array[j+1];
                        if(aux) array[j+1] = aux;
                    }
                }
            }
            return array;
        }

console.log(orderArray([5,6,4,3,9,0]));