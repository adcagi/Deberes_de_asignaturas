//ej1
let str = " hola";
let num = 2;
console.log(str + num);
let bigint = 123456789012345678901234567890n;
try {
    console.log(bigint + num);
}
catch (e) {
    console.error("No se puede mezclar bigint con number");
}
let numeros = [0, 2, 0, 4, 0];
for (let n of numeros) {
    let exist = n > 0;
    if (exist) {
        console.log(n);
    }
}
//ej2
var mides;
(function (mides) {
    mides[mides["xs"] = 0] = "xs";
    mides[mides["s"] = 1] = "s";
    mides[mides["m"] = 2] = "m";
    mides[mides["l"] = 3] = "l";
    mides[mides["xl"] = 4] = "xl";
})(mides || (mides = {}));
function porcentaje(value, talla) {
    let increment = 0;
    if (talla === mides.xs) {
        increment = value + (value * 0 / 100);
    }
    else if (talla === mides.s) {
        increment = value + (value * 5 / 100);
    }
    else if (talla === mides.m) {
        increment = value + (value * 10 / 100);
    }
    else if (talla === mides.l) {
        increment = value + (value * 15 / 100);
    }
    else if (talla === mides.xl) {
        increment = value + (value * 20 / 100);
    }
    return increment;
}
console.log(porcentaje(10, mides.xl));
var dies;
(function (dies) {
    dies[dies["lunes"] = 0] = "lunes";
    dies[dies["martes"] = 1] = "martes";
    dies[dies["miercoles"] = 2] = "miercoles";
    dies[dies["jueves"] = 3] = "jueves";
    dies[dies["viernes"] = 4] = "viernes";
    dies[dies["sabado"] = 5] = "sabado";
    dies[dies["domingo"] = 6] = "domingo";
})(dies || (dies = {}));
function numeroDia(dia) {
    return dia + 1;
}
console.log(numeroDia(dies.miercoles));
var colors;
(function (colors) {
    colors["red"] = "#EB1416";
    colors["orange"] = "#FFA500";
    colors["yellow"] = "#fffb00ff";
    colors["green"] = "#79C314";
    colors["blue"] = "#487DE7";
    colors["indigo"] = "#4B369D";
    colors["violet"] = "#70369D";
})(colors || (colors = {}));
function attachColor(...color) {
    for (let element of color) {
        let div = document.createElement('div');
        div.style.width = '700px';
        div.style.height = '100px';
        div.style.backgroundColor = element;
        document.body.appendChild(div);
    }
}
attachColor(colors.red, colors.orange, colors.yellow, colors.green, colors.blue, colors.indigo, colors.violet);
//ej3
function retType(param) {
    return typeof (param);
}
console.log(retType(5));
function retArray(value, param) {
    for (let v of param) {
        if (v === value) {
            return true;
        }
    }
    return false;
}
console.log(retArray(3, [2, 4, 5, 3, 8]));
function orderArray(array) {
    let aux = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < i - 1; j++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    return array;
}
console.log(orderArray([1, 7, 9, 4, 3, 2, 5, 6, 8]));
export {};
//# sourceMappingURL=app.js.map