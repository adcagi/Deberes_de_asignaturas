import minValue from "./mathematics";
import { maxValue, decompose } from "./mathematics";
import { backgroundDark, backgroundLight, textDark, textLight, toggleTheme } from "./darker";
document.addEventListener("DOMContentLoaded", () =>{
    const str : string = "gol!";
    const num : number = 1;
    console.log(str + num);

    const bigNum : bigint = 100000000000000000000000000n;
    // try{
    //     console.log(bigNum + num);
    // }catch{
    //     throw console.error("no se pueden sumar");
        
    // }


    const array : number[] = [9,5,6,3,2,0];
    for(let value of array){
        if(value > 0){
            console.log(value);
        }
    }



    enum mides{
    xs,
    s,
    m,
    l,
    xl
    };

    console.log(mides);

    function  increment(preu: number, mida: mides ) {
        let increment = 0;
        if(mida === mides.xs){
            increment = preu + (preu * 0.5)
        }
        if(mida === mides.s){
            increment = preu + (preu * 0.10)
        }
        if(mida === mides.m){
            increment = preu + (preu * 0.15)
        }
        if(mida === mides.l){
            increment = preu + (preu * 0.20)
        }
        if(mida === mides.xl){
            increment = preu + (preu * 0.25)
        }
        return increment;
    }

    console.log(increment(10, mides.xl))



    enum weekDays{
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    }

    function printWeekDay(day: weekDays){
        return day + 1;
    }

    console.log(printWeekDay(weekDays.sunday));

    enum arcSanMarti{
        red = '#EB1416',
        orange = '#FFA500',
        yellow = '#ffcc00ff',
        green = '#79C314',
        blue = '#487DE7',
        indigo = '#4B369D',
        violet = '#70369D'
    }

    function addColors(color: arcSanMarti){
        const div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px"
        div.style.backgroundColor = `${color}`

        document.body.appendChild(div);
    }

    addColors(arcSanMarti.red);
    addColors(arcSanMarti.orange);
    addColors(arcSanMarti.yellow);
    addColors(arcSanMarti.green);
    addColors(arcSanMarti.blue);
    addColors(arcSanMarti.indigo);
    addColors(arcSanMarti.violet);

    function data<T>(param : T){
        return typeof(param);
    }

    console.log(data("hola"));

    function arrayGeneric<T>(arr: T[], param: T){
        if(arr.includes(param)){
            return true;
        }else{
            return false;
        }
    }


    console.log(arrayGeneric([1,2,4,5,3,9], 0));

    function bubbleSort<T>(arr: T[]){
        let x;
        for(let i = 0; i < arr.length - 1; i++){

             for(let j = 0; j < arr.length - 1; j++){

                 if(arr[j] > arr[j + 1] ){
                     x = arr[j + 1];
                     arr[j + 1] = arr[j];
                     arr[j] = x;
                     
                 }
             }
        }

        return arr;
    }


    console.log(bubbleSort([9,6,0,2,1]));


    type userName = string;
    let name: userName = "carlitos";

    console.log(name);


    type user = {
        id: number,
        nom: string,
        email: string
    }

    let usuaris: user[] = [
        {id:1, nom:"manolo", email:"manolo@email.com"},
        {id:2, nom:"conchita", email:"conchita@email.com"},
        {id:4, nom:"ermenehildo", email:"ermenehildo@email.com"}
    ];

    function users(param: user){
        return `Tu nombre es: ${param.nom}, Tu email es: ${param.email}`;
    }

    console.log(users(usuaris[2]));


    type triangle = {
        base: number;
        alcada:  number;
    }

    type cercle = {
        radi: number;
    }

    function fromes(param: triangle | cercle){
        if("base" in param){
            let res = param.base * param.alcada;
            return res;
        }
        if("radi" in param){
            let res = Math.PI * param.radi**2;
            return res;
        }
    }

    console.log(fromes({base:3, alcada:4}));
    console.log(fromes({radi:4}));


    console.log(minValue([3,4,2,1,0]));
    console.log(maxValue([3,4,2,1,0]));
    console.log(decompose(100));

    const btn = document.getElementById("boton")!;
    toggleTheme(btn);
})  