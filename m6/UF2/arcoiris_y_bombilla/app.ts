
enum Size {
    XS,
    S,
    M,
    L,
    XL
}

function getPriceFromSize(size: Size, basePrice: number): number {
    const increments = {
        [Size.XS]: 0,
        [Size.S]: 0.05,
        [Size.M]: 0.10,
        [Size.L]: 0.15,
        [Size.XL]: 0.20
    };
    return basePrice + basePrice * increments[size];
}


console.log(getPriceFromSize(Size.M, 10)); 
console.log(getPriceFromSize(Size.L, 10)); 


enum Week {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function printWeekNumberDay(day: Week): void {
    console.log(day);
}


printWeekNumberDay(Week.Monday);
printWeekNumberDay(Week.Sunday);



enum Color {
    red = '#EB1416',
    orange = '#FFA500',
    yellow = '#FAAB36',
    green = '#79C314',
    blue = '#487DE7',
    indigo = '#4B369D',
    violet = '#70369D'
}

function printColors(colors: Color[]): void {
    for (let color of colors) {
        let body: HTMLElement = document.body;
        let div: HTMLElement = document.createElement("DIV");
        div.style.height = "20px";
        div.style.backgroundColor = color; 
        body.appendChild(div);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    printColors([
        Color.red,
        Color.indigo,
        Color.violet,
        Color.orange,
        Color.yellow,
        Color.green,
        Color.blue
    ]);
});

function getTypeof<T>(param : T) : string{
    return typeof param
}

function bubblesort<T>(arr : T[]) : T[]{
    const len = arr.length
    for (let i = 0; i < len -1; i++){
        for(let j = 0; j < len -i -1; j++ ){
            if(arr[j]>arr[j+1]){
                let aux = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}

console.log(bubblesort([1,5,6,3,8,2,9,4,7]))