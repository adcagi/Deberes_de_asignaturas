

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

       function orderArray<T>(array : T[]){
            for(let i = 0; i < array.length; i++){
                for(let j = 0; j < array.length - 1 -i; j++){
                    if(array[j]! > array[j+1]!){
                        let aux = array[j];
                        (array as any[])[j] = array[j+1];
                        if(aux) array[j+1] = aux;
                    }
                }
            }
            return array;
        }

console.log(orderArray([5,6,4,3,9,0]));




type enumerable = string | Array<any>

function foo(p : enumerable){
   p.length
   p.includes('a')
//    p.split(' ') -----> Error 

}



class A{
    getValue(){
        return 5;
    }
    toInteger(){
        return 7;
    }
}


class B{
    getValue(){
        return 5;
    }
    toString(){
        return "5";
    }
}


let a = new A();

a.getValue();
a.toInteger();

let b = new B();
b.getValue();
b.toString();

type AiB = A | B; //guardar el tipo unido en una especie de variable

let c : A | B = new B(); //se ha de especificar el tipo que devolverá


c.getValue(); //hereda los metodos de la clase especificada, pero puede tener las clases que quieras


function foo2(c : A | B){
    c.getValue();  // solo hereda los metodos que tienen en conjunto las clases A y B
}


//crear un typeAlias de una clase
type User ={
    userId: number;
}


let u : User = {
    userId: 1
}

//ej4

type UserName = string;

let user1 : UserName = "pepe";

console.log("Tu Alias es: " + user1);

type UserReference = {
    id: number,
    nom: string,
    email: string
}

let userR1 : UserReference = {
    id: 1,
    nom: "adri",
    email: "adri@gmail.com"
}

let userR2 : UserReference = {
    id: 2,
    nom: "pedro",
    email: "pedro@gmail.com"
}

let userR3 : UserReference = {
    id: 3,
    nom: "matilda",
    email: "matilda@gmail.com"
}

let arr : UserReference[] =  [userR1, userR2, userR3];


function data(user : UserReference){
  return `ID:${user.id}, email:${user.email}, nom:${user.nom}`
}

console.log("Los datos del usuario son: " + data(userR1));

type triangle = {
    base: number,
    alcada: number
}

type cercle = {
    radi:number
}

let forma1 : triangle ={
    base: 3,
    alcada: 4
}

let forma2 : cercle ={
    radi: 5
}


function formes(forma : triangle | cercle){
    if("base" in forma){
       let area = (forma.base * forma.alcada) /2;
       return area;
    } else if("radi" in forma){
        let area = Math.PI * forma.radi^2;
        return area;
    }
}

console.log(formes(forma1));
console.log(formes(forma2));